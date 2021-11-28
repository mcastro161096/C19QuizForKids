import { React, useState } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import "../NickName/nickname.css"
import { useHistory } from "react-router-dom";
import Pergunta from "../Pergunta";
import "./style.css";


function Card(props) {
const [listaPerguntas, setlistaPerguntas] = useState([])
const [listaRespostas, setlistaRespostas] = useState([])

let pergunta = "O covid-19 é um vírus?";

  return (
    <div className="containercard">
      <div className="boxcard">
        <div className="texttop">
          {localStorage.getItem('NickName')}
          <Pergunta pergunta={pergunta} />
        </div>
      </div>
    </div>
  );
}
export default Card;