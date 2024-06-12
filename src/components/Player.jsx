import { useState } from "react";
export default function Player({initialname, symbol, isActive}){
    const[newName, setnameChange]= useState(initialname);
    const[isEditing, setIsEdit]= useState(false);

    function handleEditClick(){
        setIsEdit(!isEditing);    
    }

    function handleChange(event){
        setnameChange(event.target.value);
    }

    let playerName=  <span className="player-name">{newName}</span>;
    if(isEditing){

        playerName= <input type="text" required value={newName} onChange={handleChange}/>;
         
    }
    


    return (
        <li className={isActive ? 'active': undefined}>
        <span className="players">
            {playerName}
            <span className="symbol-name">{symbol}</span>
            </span>
            <button onClick={handleEditClick} >{isEditing? 'Save':'Edit'}</button>
     </li>
    
    );
}