import React from "react";
import "./style.css";
import {Link} from "react-router-dom";


export default function ButtonStartGame() {
    return (
        <div className="container">
            <div className="box ">
                <div className="wrap">
                <Link to="/nickname"> <button className="button">Start</button></Link>
                {/* <Link to="/" className="navbar-brand">Dash</Link> */}
                </div>
            </div>
        </div>
    );
}

