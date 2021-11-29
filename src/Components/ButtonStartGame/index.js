import React from "react";
import "../ButtonStartGame/buttonStartGame.css"
import { Link } from "react-router-dom";


export default function ButtonStartGame() {
    return (
        <>
                <div className="box">
                    <Link to="/nickname"> <button className="btnstart">START</button></Link>
                </div>

                <Link to="/ranking">
                    {" "}
                    <button className="btnnick">Acessar Ranking</button>
                </Link>
        </>

    );
}

