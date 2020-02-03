import React from 'react'
import Todo from './Todo'

const List = (props) => {
  return(
    <div className={props.className}>
      <p className='listTitle'> {props.title}</p>
      {props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
    </div>
  )
}

export default List