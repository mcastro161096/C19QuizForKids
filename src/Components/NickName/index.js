import React from "react";
import {BsFillCaretRightSquareFill} from 'react-icons/bs'
import {Link} from "react-router-dom";


function NickName() {
    return (
        <div>
        <input type="text"></input> 
      
       <Link  to="/card"> <button className="btn btn-primary"> <BsFillCaretRightSquareFill/></button></Link>
        </div>
    );
}

export default NickName;