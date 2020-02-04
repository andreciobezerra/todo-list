import React from 'react'
import Todo from './Todo'

const List = (props) => {  
   const changeTodos = (alt) =>props.changed(alt)
   const deleteTodos = (alt) =>props.deleted(alt)
  
  return(
    <div className={props.className}>
      <p className='listTitle'> {props.title}</p>
      {props.todos.map(todo => <Todo key={todo.id} todo={todo} changed={(alt)=>changeTodos(alt)} deleted={(alt)=>deleteTodos(alt)}/>)}
    </div>
  )
}

export default List