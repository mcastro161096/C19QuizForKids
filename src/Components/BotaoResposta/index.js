import react from "react";
import "./style.css"


function BotaoResposta({color, texto, handleResposta}) {
    let classe = " botaoResposta " + color;

    return (
        <button className={classe} onClick={handleResposta} >{texto}</button>
    )
}
export default BotaoResposta;