import { React, useState } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Pergunta from "../Pergunta";
import BotaoResposta from "../BotaoResposta";
import "./style.css";
import pergunta1 from "./pergunta1.png";
import pergunta2 from "./pergunta2.png";


function Card(props) {
  const [listaPerguntas, setlistaPerguntas] = useState([])
  const [listaRespostas, setlistaRespostas] = useState([])

  const listaPerguntastemp = [{ id: 1, texto: "O covid-19 é um vírus?" }, { id: 2, texto: "O covid-19 fal mal à saúde?" }]
  const listaRespostastemp = [{ idPergunta: 1, valor: true }]
  let pergunta = "O covid-19 é um vírus?";

  return (
    <div className="containercard">
      <div className="boxcard">
        <div className="texttop">
          <Pergunta pergunta={pergunta} />

          <img style={{width:"400px", height:"250px",marginTop:"5px"}} src={pergunta2}></img>

        </div>

        <div className="divBotoesResposta">
          <BotaoResposta color="verde" texto="Verdadeiro" />
          <BotaoResposta color="vermelho" texto="Falso" />
        </div>
      </div>
    </div>
  );
}
export default Card;