import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "../Ranking/ranking.css"

function Ranking(){

    return(
        <div>
            <div class="table">
                
                <table class="table table-striped">
                    <thead class="linha1">
                        <tr>
                        <th scope="col">Posição</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Pontos</th>
                        
                        </tr>
                    </thead>
                    <tbody class="linha2">
                        <tr>
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
                        
                        </tr>
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