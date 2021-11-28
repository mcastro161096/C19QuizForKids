import {react, useEffect} from "react";
import { BsVolumeDownFill } from "react-icons/bs";

import "./style.css"

function Explicacao({explicacao}) {

    
    let voices = [];
    const utterance = new SpeechSynthesisUtterance();
    
    speechSynthesis.addEventListener("voiceschanged", () => {
        voices = speechSynthesis.getVoices();
                SetVoice();
    });
    
    function SetVoice() {
        voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.name == "Google português do Brasil"); //"Microsoft Daniel - Portuguese (Brazil)"
        utterance.pitch = 0.9;
        utterance.rate = 0.95;
    }
    
    function SpeakText(text) {
        if (utterance.voice.name != "Google português do Brasil") {
            SetVoice();
        }
        utterance.text = text;
        speechSynthesis.speak(utterance);
    }

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