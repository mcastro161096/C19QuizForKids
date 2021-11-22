import React from "react";
import "./style.css";
import {Link} from "react-router-dom";


export default function ButtonStartGame() {
    return (
        <div className="container">
            <div className="box ">
                <div className="wrap">
                <Link to="/nickname"> <button className="buttostart">Start</button></Link>
                </div>
            </div>
        </div>
    );
}

