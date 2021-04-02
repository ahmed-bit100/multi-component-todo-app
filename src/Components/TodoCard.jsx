import React, { useState } from 'react'
// import {Button,Modal} from 'react-bootstrap'

const TodoCard = (props) => {
    // props => delete , complete , todo = {id,action,isDone}
  
    return (
        <div>
            <h1 id={props.todo.isDone? "done" : "" }  > {props.todo.action} </h1>
            <button onClick={()=> props.complete(props.todo.id)}> {props.todo.isDone ? "Undo" : "Complete" }  </button>
            <button onClick={()=>props.delete(props.todo.id)}>Delete</button>
           <button>Edit</button>
        </div>
    )
}

export default TodoCard
