import React from 'react'

const Todo = (props) =>{
  if(props.todo.resolved){
    return(
      <div className={'singleTodo resolvedTodo'}>
        <p>{props.todo.title}</p>
      </div>
    )
  }

  
  return(
    <div className={'singleTodo'}>
      <p className={props.todo.priority==='High' ? 'high' : 'low'}>{props.todo.title}</p>
      <p className={Date.parse(props.todo.due) < Date.now() ? 'dateExperied' : 'date'}>{props.todo.due}</p>
    </div>
  )
}

export default Todo