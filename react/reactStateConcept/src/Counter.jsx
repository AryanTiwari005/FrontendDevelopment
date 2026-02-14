import { useState } from "react";
    function init(){
        return Math.floor(Math.random()*10);
    }
export default function Counter(){
    let [count,setcount] = useState(init);
    let incount=()=>{
        
            setcount((count)=>{
                count++;
                return count;   
            });
           
            
    };
    
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incount}>click me buddy!</button>
        </div>
    )
}