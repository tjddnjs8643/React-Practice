import React from 'react'

export default function List() {
    const todos=[
        { id: 1, text:'Drink Water'},
        { id: 2, text:'Study Hard'},
        { id: 3, text:'Leaning React'},
        { id: 4, text:'listen Lecture'},
        { id: 5, text:'Go to Bed'}
    ];

    const Item = (props) =>{
        return <li >{props.text}</li>
    }

    const todoList = todos.map(todo =>
        <Item key= {todo.id}{...todo}/>
        );
    return (
        <div>
            {todoList}
        </div>
    )
}
