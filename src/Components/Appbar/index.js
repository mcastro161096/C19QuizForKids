import react from "react";


function Appbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <label className="navbar-brand" style={{marginLeft:"3%"}}>Quiz</label>
            <label className="navbar-brand " style={{ marginLeft:"80%"}}>{localStorage.getItem('NickName') || ""}</label>
            <button className="navbar-toggler" type="button" data-toggle="colapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                
            </div>
        </nav>
    );
    }
export default Appbar;