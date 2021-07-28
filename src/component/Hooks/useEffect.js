import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () =>{
    const initialData = 10;

    const [myNum,setMyNum] =  useState(initialData)
    console.log(myNum);

    // useEffect( () => {
    //     console.log("hi")

    // },[])
    useEffect( () => {
        document.title =`Chats(${myNum})`

    })

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

        </div>
        </>
    )
}


export default UseEffect;

