export default function gameover({winner, restart}){

    return <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It is a draw</p>}
        <p>
            <button onClick={restart}>Rematch</button>
        </p>
    </div>
}