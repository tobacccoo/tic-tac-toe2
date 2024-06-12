import { useState } from "react";

import Gameboard from "./components/Gameboard";
import Player from "./components/Player"
function App() {

  const [activePlayer, setactivePlayer]= useState('X');

function handleselectPlayer(){

  setactivePlayer((curPlayer)=> curPlayer==='X'?'0':'X' )

}

  return (
    <main>
      <div id="game-container">
          <ol id="players" className="highlight-player">
           <Player initialname='Player1' symbol='X' isActive={activePlayer==='X'} />
           <Player initialname='Player2' symbol='0' isActive={activePlayer==='0'}/>
          </ol>
      
        <Gameboard onselectPlayer={handleselectPlayer}/>
      </div>
    </main>

  ) ;
}

export default App
