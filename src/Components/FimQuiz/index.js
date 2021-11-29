import { Link } from "react-router-dom";


function FimQuiz() {
    return (
        <>
            <div>Parabéns você respondeu tudo!!!</div>
            <Link to="/ranking">
                {" "}
                <button className="btnnick">Acessar Ranking</button>
            </Link>
        </>
    );
}

export default FimQuiz;
