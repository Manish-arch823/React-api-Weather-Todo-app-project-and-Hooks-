import React, { useReducer, useState } from "react";
import "./style.css";

const reducer = (state,action) => {
    if (action.type === "INCR"){
        state =state+1;

    }
    if (state > 0 && action.type === "DECR"){
        state =state-1;

    }
    return state;

}

const UseReducer = () =>{
    // const initialData = 10;

    // const [myNum,setMyNum] =  useState(initialData)
    // console.log(myNum);
    const intialData=10;
    const [state,dispatch]=useReducer(reducer,intialData);

    return (
        <>
        <div className="center_div" style={{textAlign:'center',marginTop:'50px',fontSize:'50px'}}>
            <p>{state}</p>
            <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="w3-button w3-aqua" onClick={() => dispatch({type:"INCR"})} >INCR</p>
            </div>
            <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="w3-button w3-red"   onClick={() => dispatch({type:"DECR"})} >DICR</p>
            </div>
        </div>
        </>
    )
}


export default UseReducer;

