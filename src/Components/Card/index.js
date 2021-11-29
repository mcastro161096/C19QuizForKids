import { React, useState, useEffect } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Pergunta from "../Pergunta";
import BotaoResposta from "../BotaoResposta";
import Explicacao from "../Explicacao";
import "./style.css";



function Card(props) {
  const [listaPerguntas, setlistaPerguntas] = useState([])
  const [listaRespostas, setlistaRespostas] = useState([])
  const [perguntaAtual, setPerguntaAtual] = useState({})
  const [index, setindex] = useState(0)

  let listaPerguntastemp = [];

  const _init = async () => {
    axios.get("https://localhost:44335/api/Card")
      .then((response) => {
        listaPerguntastemp = response.data;
        setlistaPerguntas(response.data || []);
        setPerguntaAtual(listaPerguntastemp[index]);
      });
  }

  const handleResposta = () => {
    setPerguntaAtual(listaPerguntas[index + 1]);
    setindex(index + 1);
    console.log("passou aqui");
  }

  useEffect(() => {
    _init();

  }, []);

  return (
    <div className="containercard">
      <div className="boxcard">
        <div className="texttop">
          <Pergunta pergunta={perguntaAtual.pergunta || ""} />

          <img style={{ width: "400px", height: "250px", marginTop: "5px" }} src={perguntaAtual.imagem || ""} alt="imagem"></img>

        </div>
        <Explicacao explicacao={perguntaAtual.explicacao || ""} />

        <div className="divBotoesResposta">
          <BotaoResposta color="verde" texto="Verdadeiro" handleResposta={handleResposta} />
          <BotaoResposta color="vermelho" texto="Falso" handleResposta={handleResposta} />
        </div>
      </div>
    </div>
  );
}
export default Card;