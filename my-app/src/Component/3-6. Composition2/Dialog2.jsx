import React, { useState } from 'react'

export default function Dialog2(props) {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <>
        <button onClick={() => setIsOpen(true)}>open</button>
        {isOpen && <div style={{
            position : "absolute",
            zIndex : 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white"
        }} >
            <h1>{props.title}</h1>
            <h5>{props.discription}</h5>
            <button style ={{backgroundColor: "red",
            color:"white"}}
            onClick = {()=> setIsOpen(false)}>{props.button}</button>
            </div>}
            {isOpen && <div
            style={{
                position: "fixed",
                top : 0,
                left: 0,
                bottom:0,
                right:0,
                backgroundColor: "lightgray"
            }}/>
        }
        </>
    )
}
