import React from 'react'

export default function Dialog(props) {
    return (
        <div style = {{backgrounColor: `pink`}}>
            {props.children};
        </div>
    )
}
