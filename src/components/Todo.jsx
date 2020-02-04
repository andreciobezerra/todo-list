import React , {useState} from 'react'
import Icon from './Icon'

const Todo = (props) => {
  const [todo, setTodo] = useState(props.todo)

  const handleChange = () => {
    let altTodo = { ...todo, resolved: !todo.resolved } 
    setTodo(altTodo)
    props.changed(altTodo)
  }

  const handleDelete = () => {
    props.deleted(todo)
  }

  if (todo.resolved) {
    return (
      <div className={'singleTodo resolvedTodo'}>
        <p className='block'>{todo.title}</p>
        <span className='icons'>
          <Icon type='return' onClick={()=>handleChange()}/>
          <Icon type='bin' onClick={() => handleDelete()}/>
        </span>
      </div>
    )
  }


  return (
    <div className={'singleTodo'}>
      <div className='block'>
        <p className={todo.priority === 'High' ? 'high' : 'low'}>{todo.title}</p>
        <p className={Date.parse(todo.due) < Date.now() ? 'dateExperied' : 'date'}>{todo.due}</p>
      </div>
      <span className='icons'>
        <Icon type='checked' onClick={() => handleChange()}/>
        <Icon type='bin' onClick={() => handleDelete()}/>
      </span>
    </div>
  )
}

export default Todo