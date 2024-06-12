
const initialGameboard= [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];



export default function Gameboard({onselectPlayer, turns}){

    let gameboard = initialGameboard;
    for(const turn of turns){
        const{square, player} = turn;
        const{row, col} = square;

        gameboard[row][col]= player;
    }


return (
    <ol id="game-board">
        {gameboard.map((row, rowIndex)=>( <li key={rowIndex}>
            <ol>{row.map((playerSymbol, colIndex)=> ( <li key={colIndex}>
                <button onClick={()=>onselectPlayer(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
            ))}</ol>

        </li> ))}
    </ol>    

);
}