import { useState } from 'react'
export default function LikeButton(){
    let [like,setLike]=useState(false)
    let clicked=()=>{
      let newLike=!like
      setLike(newLike);
    };
    let LikeStyles={
        color:"red",
        fontSize:"30px",
        cursor:"pointer"
    }
    return(
        <div>
            <p onClick={clicked} style={LikeStyles}>
                {
               !like ? (
               <i className="fa-solid fa-heart"></i> ) :  (<i className="fa-regular fa-heart"></i>)
            }   
               </p>
        </div>    
    );
}