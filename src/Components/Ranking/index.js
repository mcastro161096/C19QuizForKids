import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "../Ranking/ranking.css"
import TableRow from "../TableRow";

function Ranking() {

    const [listaRank, setListaRank] = useState([]);
    
    const _init = async () => { 
         axios.get("https://localhost:44335/api/Ranking")
            .then((response) => {
                setListaRank(response.data || []);
            });
        }
    
    useEffect(() => {
        _init();
    }, []);

    return (
        <div>
            <div className="table">

                <table className="table table-striped">
                    <thead className="linha1">
                        <tr>
                            <th scope="col">Posição</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Pontos</th>

                        </tr>
                    </thead>
                    <tbody className="linha2">
                        { listaRank.map((rank, i) => {
                            return <TableRow key={rank.id} rank={rank} posicao={i + 1} />
                        }
                        )}
                    </tbody>
                </table>

            </div>
        
            <div className="">
                <Link to="/nickname">
                    {" "}
                    <button className="btnvoltar" >Voltar</button>
                </Link>
            </div>

        </div>


    );

}


export default Ranking;