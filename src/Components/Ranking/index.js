import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "../Ranking/ranking.css"
import TableRow from "../TableRow";

function Ranking() {

    const [listaRank, setListaRank] = useState([]);

    // const lista = async () => await axios.get("https://localhost:44335/api/Ranking")
    //     .then(res => {
    //         console.log(res.data);

    //     })
    let lista = [];
    const _init = async () => {
        await axios.get("https://localhost:44335/api/Ranking")
            .then((response) => {
                lista = response.data;
                setListaRank(response.data || []);
                console.log(lista)
            });

    }

    const get = (nome = '') => {
        _init();
    }

    useEffect(() => {
        get();
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
                        {(lista.length > 0) && lista.map((rank, i) => {
                            return <TableRow rank={rank} />
                        }
                        )}
                        {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>300</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>250</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>200</td>
                        
                        </tr>*/}
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