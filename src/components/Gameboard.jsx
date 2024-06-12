import { useState } from "react";

const initialGameboard= [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];



export default function Gameboard({onselectPlayer, activeSymbol}){

const [gameboard, setGameboard]= useState(initialGameboard);

function handlesqClick(rowIndex, colIndex){
    setGameboard((prevGameboard)=>{
        const updatedBoard= [...prevGameboard.map(innerArray=>[...innerArray])]
        updatedBoard[rowIndex][colIndex]= activeSymbol;
        return updatedBoard;

        onselectPlayer();
})
}

return (
    <ol id="game-board">
        {gameboard.map((row, rowIndex)=>( <li key={rowIndex}>
            <ol>{row.map((playerSymbol, colIndex)=> ( <li key={colIndex}>
                <button onClick={()=>handlesqClick(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
            ))}</ol>

        </li> ))}
    </ol>    

);
}