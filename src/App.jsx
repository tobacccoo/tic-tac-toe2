import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combo";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player"
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";



function deriveCurrentPlayer(gameturns){
  let currentPlay = 'X';
    if(gameturns.length> 0 && gameturns[0].player ==='X'){
      currentPlay= '0';
    }
    return currentPlay;

}

const initialGameboard= [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function App() {

  const[gameturns, setgameTurns]= useState([]);

  let gameboard = [...initialGameboard.map(array=>[...array])];
  for(const turn of gameturns){
      const {square, player} = turn;
      const {row, col} = square;

      gameboard[row][col]= player;
  }
  let winner;
  for(const combo of WINNING_COMBINATIONS){
    const firstSqSymbol = gameboard[combo[0].row][combo[0].column];
    const secondSqSymbol = gameboard[combo[1].row][combo[1].column];
    const thirdSqSymbol = gameboard[combo[2].row][combo[2].column];

    if(firstSqSymbol && firstSqSymbol === secondSqSymbol && firstSqSymbol=== thirdSqSymbol){

      winner= firstSqSymbol;
    }

  }

  const isDraw = gameturns.length===9 && !winner;

  
  // const [activePlayer, setactivePlayer]= useState('X');
  const activePlayer = deriveCurrentPlayer(gameturns);

  function rematch(){
    setgameTurns([]);
  }

function handleselectPlayer(rowIndex, colIndex){

  // setactivePlayer((curPlayer)=> curPlayer==='X'?'0':'X' )
  setgameTurns((prevturns)=>{
    
    const currentPlay = deriveCurrentPlayer(prevturns);
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
         {(winner || isDraw)&& <GameOver winner={winner} restart={rematch}/>} 
        <Gameboard onselectPlayer={handleselectPlayer} board={gameboard}/>
      </div>
      <Logs detailTurn= {gameturns}/>
    </main>

  ) ;
}

export default App
