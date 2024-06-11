import Gameboard from "./components/Gameboard";
import Player from "./components/Player"
function App() {

  return (
    <main>
      <div id="game-container">
          <ol id="players">
           <Player initialname='Player1' symbol='X' />
           <Player initialname='Player2' symbol='0' />
          </ol>
      
        <Gameboard/>
      </div>
    </main>

  ) ;
}

export default App
