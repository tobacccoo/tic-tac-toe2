import { useState } from "react";

import Gameboard from "./components/Gameboard";
import Player from "./components/Player"
import Logs from "./components/Log";
function App() {

  const[gameturns, setgameTurns]= useState([]);
  const [activePlayer, setactivePlayer]= useState('X');

function handleselectPlayer(rowIndex, colIndex){

  setactivePlayer((curPlayer)=> curPlayer==='X'?'0':'X' )
  setgameTurns((prevturns)=>{
    const currentPlay = 'X';
    if(prevturns.length> 0 && prevturns[0].player ==='X'){
      currentPlay= '0';
    }
    const updatedturns= [{square:{row: rowIndex, col: colIndex}, player: currentPlay },...prevturns];

    return updatedturns;

  })
}

  return (
    <main>
      <div id="game-container">
          <ol id="players" className="highlight-player">
           <Player initialname='Player1' symbol='X' isActive={activePlayer==='X'} />
           <Player initialname='Player2' symbol='0' isActive={activePlayer==='0'}/>
          </ol>
      
        <Gameboard onselectPlayer={handleselectPlayer} turns={gameturns}/>
      </div>
      <Logs />
    </main>

  ) ;
}

export default App
