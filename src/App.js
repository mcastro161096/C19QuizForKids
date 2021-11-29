import React from 'react';
import "./App.css";
import {Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from "./styles";

import Appbar from './Components/Appbar';
import NickName from './Components/NickName';
import ButtonStartGame from './Components/ButtonStartGame';
import Card from './Components/Card';
import Ranking from './Components/Ranking';
import FimQuiz from './Components/FimQuiz';

function App() {



  return <>
   
  <Appbar/>
       <div className="container">
    
       <div className="row">
            <div className="col">
              <Switch>
                <Route  path="/" exact component={ButtonStartGame} />
                <Route path="/nickname" component={NickName} />
                <Route path="/card" component={Card} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/fimquiz" component={FimQuiz} />
                {/* <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} /> */}
              </Switch>
            </div>
            <GlobalStyle />
            <ToastContainer />
          </div>
        
      </div>
  
    
  
  
  
     </>

}

export default App;
