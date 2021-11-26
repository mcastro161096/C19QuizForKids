import React from "react";
import "../ButtonStartGame/buttonStartGame.css"
import {Link} from "react-router-dom";


export default function ButtonStartGame() {
    return (
        <div className="container">

            
            <div className="box">
                
                <Link to="/nickname"> <button className="btnstart">START</button></Link>
                
            </div>
        </div>
    );
}

