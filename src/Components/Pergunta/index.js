import {react, useEffect} from "react";
import { BsVolumeDownFill } from "react-icons/bs";

import "./style.css"

function Pergunta({pergunta, SpeakText}) {

const ouvir = (event) =>{
event.preventDefault();
const texto = document.querySelector('#textoPergunta');
    SpeakText(texto.innerHTML);
}

useEffect(() => {
   
}, [])


    return (
        <div  className="pergunta">
            <label id="textoPergunta">{pergunta}</label>
            <button id="ouvir" onClick={ouvir} className="btn btn-primary ouvir">
            <BsVolumeDownFill size={30}/>
            </button>
        </div>
    )
}

export default Pergunta;