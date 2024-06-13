export default function Logs({detailTurn}){

return (
    <ol id="log">
        {detailTurn.map((totalturn)=>  ( <li key={`${totalturn.square.row} ${totalturn.square.col}`}>
            {totalturn.player} selected {totalturn.square.row}, {totalturn.square.col}
         </li>))}
    </ol>
);

}