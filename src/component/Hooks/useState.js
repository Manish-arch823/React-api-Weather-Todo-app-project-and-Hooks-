import React, { useState } from "react";
import "./style.css";

const UseState = () =>{
    const initialData = 10;

    const [myNum,setMyNum] =  useState(initialData)
    console.log(myNum);

    return (
        <>
        <div className="center_div" style={{textAlign:'center',marginTop:'50px',fontSize:'50px'}}>
            <p>{myNum}</p>
            <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="w3-button w3-aqua" onClick={() => setMyNum(myNum +1)} >INCR</p>
            </div>
            <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="w3-button w3-red"  onClick={() =>(myNum >0 ?  setMyNum(myNum -1):setMyNum(0))} >DICR</p>
            </div>
        </div>
        </>
    )
}


export default UseState;

