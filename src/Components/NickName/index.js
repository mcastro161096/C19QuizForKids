import { React, useState } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import "../NickName/nickname.css"
import { useHistory } from "react-router-dom";


function NickName() {
  const [nick, setnick] = useState("");

  const history = useHistory();

  const handleNick = (event) => {
    setnick(event.target.value);
  }

  const efetuarPost = async () => {
    const jogador = {
      id: 0,
      nickName: nick,
    };
    let retorno = await axios.post(`https://localhost:44335/api/nickName/create`, jogador);
    return retorno.data;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await efetuarPost();
      if (resposta.success) {
        localStorage.setItem('NickName', resposta.nickname);
        localStorage.setItem('pontos', 0)
        history.push("/card");
      }
    } catch (error) {
      alert("Erro ao salvar NickName " + error);
    }

  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="nick" value={nick} onChange={handleNick} placeholder="Nickname"></input>
        <button type="submit" className="btn btn-primary">
          <BsFillCaretRightSquareFill />
        </button>
        <br /><br />

        <div>
          <Link to="/ranking">
            {" "}
            <button className="btnnick">Acessar Ranking</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default NickName;
