import React from 'react';
import "./App.css";
import {Switch, Route} from 'react-router-dom';

import Appbar from './Components/Login/UI/Appbar/Index';
import ButtonStartGame from './Components/ButtonStartGame';

function App() {



  return <>
   
  <Appbar/>
       <div className="container">
    
       <div className="row">
            <div className="col">
              <Switch>
                <Route exact path="/" component={ButtonStartGame} />
                {/* <Route path="/dashboard-com-react" component={Resumo} />
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} /> */}
              </Switch>
            </div>
          </div>
        
      </div>
  
    
  
  
  
     </>

}

export default App;
