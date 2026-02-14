import './LudoBoard.css';
import { useState } from "react";
export default function LudoBoard(){
    
    let [Move,setMove]=useState({blue: 0, red: 0, green: 0, yellow: 0});
    function UpdateBlue(){
            setMove({...Move, blue: Move.blue+1});
           
    }
    function UpdateYellow(){
            setMove({...Move, yellow: Move.yellow+1});
           
    }
    function UpdateGreen(){
            setMove({...Move, green: Move.green+1});
           
    }
    function UpdateRed(){
            setMove({...Move, red: Move.red+1});
           
    }
    return(
        <div>
            <p>Game Begins!</p>
        
            <div className="board">
                <p>Blue Moves={Move.blue}</p>
                <button className="blue" onClick={UpdateBlue}>+1</button>
                 <p>Yellow Moves={Move.yellow}</p>
                <button className="yellow" onClick={UpdateYellow}>+1</button>
                 <p>Green Moves={Move.green}</p>
                <button className="green" onClick={UpdateGreen}>+1</button>
                 <p>Red Moves={Move.red}</p>
                <button className="red" onClick={UpdateRed}>+1</button>
            </div>
        </div>
    )
}