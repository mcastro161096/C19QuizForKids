import React from 'react';
import "./App.css";
import {Switch, Route} from 'react-router-dom';

import Appbar from './Components/Appbar';
import NickName from './Components/NickName';
import ButtonStartGame from './Components/ButtonStartGame';
import Card from './Components/Card';
import ButtonRanking from './Components/ButtonRanking';
import Ranking from './Components/Ranking';

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
                <Route path="/ranking" component={ButtonRanking} />
                {/* <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} /> */}
              </Switch>
            </div>
          </div>
        
      </div>
  
    
  
  
  
     </>

}

export default App;
