import { React, useState } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Pergunta from "../Pergunta";
import BotaoResposta from "../BotaoResposta";
import "./style.css";


function Card(props) {
const [listaPerguntas, setlistaPerguntas] = useState([])
const [listaRespostas, setlistaRespostas] = useState([])

const listaPerguntastemp = [{id: 1, texto:"O covid-19 é um vírus?"},{id: 2, texto:"O covid-19 fal mal à saúde?"}]
const listaRespostastemp = [{idPergunta:1, valor:true}]
let pergunta = "O covid-19 é um vírus?";

  return (
    <div className="containercard">
      <div className="boxcard">
        <div className="texttop">
          {localStorage.getItem('NickName')}
          <Pergunta pergunta={pergunta} />
        </div>
        <div className="divBotoesResposta">
       <BotaoResposta color="verde"  texto="Verdadeiro"/>
       <BotaoResposta color="vermelho"  texto="Falso"/>
       </div>
      </div>
    </div>
  );
}
export default Card;