import React from "react";
import "./style.css";
import {Link} from "react-router-dom";


export default function ButtonStartGame() {
    return (
        <div className="container">
            <div className="box">
                
                <Link to="/nickname"> <button className="btnstart">Start</button></Link>
                
            </div>
        </div>
    );
}

