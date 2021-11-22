import React from 'react'
import Dialog2 from '../3-6. Composition2/Dialog2'


export default function CustomDialog(props) {
    return (
        <Dialog2>
            <h1>{props.title}</h1>
            <h3>{props.discription}</h3>
        </Dialog2>
        
    )
}
