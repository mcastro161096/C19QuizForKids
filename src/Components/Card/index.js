import { React, useState, useEffect } from "react";
import axios from "axios";
import Pergunta from "../Pergunta";
import BotaoResposta from "../BotaoResposta";
import Explicacao from "../Explicacao";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";



function Card(props) {
  const [listaPerguntas, setlistaPerguntas] = useState([])
  const [listaRespostas, setlistaRespostas] = useState([])
  const [perguntaAtual, setPerguntaAtual] = useState({})
  const [index, setindex] = useState(0)
  const [pontos, setpontos] = useState(0)
  const history = useHistory();

  let listaPerguntastemp = [];

  const _init = async () => {
    axios.get("https://localhost:44335/api/Card")
      .then((response) => {
        listaPerguntastemp = response.data;
        setlistaPerguntas(response.data || []);
        setPerguntaAtual(listaPerguntastemp[index]);
      });
  }

  const handleResposta = (event) => {
    event.preventDefault();
    let resposta = event.target.innerHTML === "Verdadeiro" ? true : false;
    if (perguntaAtual.resposta === resposta) {
      toast.success("Resposta correta!");
      localStorage.setItem('pontos', pontos + 20)
      setpontos(pontos + 20);
      SpeakText("Resposta correta!");
    }
    else {
      toast.error("Resposta incorreta.");
      SpeakText("Resposta incorreta.");
    }

    if (index + 1 < listaPerguntas.length){
    setPerguntaAtual(listaPerguntas[index + 1]);
    setindex(index + 1);
    }
    else{
      const ranking = {
        nickname: localStorage.getItem('NickName'),
        pontuacao: pontos
      };
      axios.post("https://localhost:44335/api/ranking", ranking);
      history.push("/fimquiz");
    }

  }

  let voices = [];
  const utterance = new SpeechSynthesisUtterance();

  speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();
    SetVoice();
    console.log(voices);
  });

  function SetVoice() {
    voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(voice => voice.name === "Google português do Brasil"); //"Microsoft Daniel - Portuguese (Brazil)"
    utterance.pitch = 0.9;
    utterance.rate = 0.95;
  }

  function SpeakText(text) {
    SetVoice();
    utterance.text = text;
    speechSynthesis.speak(utterance);
  }

  const ouvir = (event) => {
    event.preventDefault();
    const texto = document.querySelector('#textoPergunta');
    SpeakText(texto.innerHTML);
  }


  useEffect(() => {
    _init();
  }, []);

  return (
    <div className="containercard">
      <div className="boxcard">
        <div className="texttop">
          <Pergunta pergunta={perguntaAtual.pergunta || ""} SpeakText={SpeakText} />

          <img style={{ width: "400px", height: "250px", marginTop: "5px" }} src={perguntaAtual.imagem || ""} alt="imagem"></img>

        </div>
        <Explicacao explicacao={perguntaAtual.explicacao || ""} SpeakText={SpeakText} />

        <div className="divBotoesResposta">
          <BotaoResposta color="verde" texto="Verdadeiro" handleResposta={handleResposta} valor={true} />
          <BotaoResposta color="vermelho" texto="Falso" handleResposta={handleResposta} valor={false} />

        </div>
      </div>
    </div>
  );
}
export default Card;