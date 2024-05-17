import "./App.css";
import { useState } from 'react';
import NavBar from './Conponent/NavBar';
import Stage from './Conponent/Stage';
import Game from './Conponent/Game';

function App() {
  
  const [stageOnoff, setStage] = useState(1);
  const [gameOnoff,setGame] = useState(0);

  return (
    <div className="background">
      <NavBar stageOnoff={stageOnoff} setStage={setStage}></NavBar>
      <div className="container">
        {
          stageOnoff ? <Stage/> : <Game/>
        }
      </div>
    </div>
    
  )
}

export default App;
