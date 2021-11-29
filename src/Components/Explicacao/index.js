import {react, useEffect} from "react";
import { BsVolumeDownFill } from "react-icons/bs";

import "./style.css"

function Explicacao({explicacao, SpeakText}) {

const ouvir = (event) =>{
event.preventDefault();
const texto = document.querySelector('#textoExplicacao');
    SpeakText(texto.innerHTML);
}

useEffect(() => {
   
}, [])


    return (
        <div  className="explicacao">
            <label id="textoExplicacao">{explicacao}</label>
            <button id="ouvir" onClick={ouvir} className="btn btn-primary ouvir">
            <BsVolumeDownFill size={30}/>
            </button>
        </div>
    )
}

export default Explicacao;