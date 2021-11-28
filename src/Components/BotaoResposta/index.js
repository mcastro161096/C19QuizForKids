import react from "react";
import "./style.css"


function BotaoResposta({color, texto}) {
    let classe = " botaoResposta " + color;

    return (
        <button className={classe}  >{texto}</button>
    )
}
export default BotaoResposta;