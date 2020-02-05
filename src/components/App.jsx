import React, { useState } from 'react'
import List from './List'
import Icon from './Icon'
import api from '../api'

const App = () => {
  const [todos, setTodos] = useState(api.readTodos())
  const [formVisible, setFormVisible] = useState(false)

  const changedTodos = (alt) => {
    const altTodos = todos.filter(todo => todo.id !== alt.id)
    altTodos.push(alt)
    setTodos(altTodos)
  }

  const deleteTodos = (alt) => {
    const altTodos = todos.filter(todo => todo.id !== alt.id)
    setTodos(altTodos)
  }

  const pushTodo = (newTodo) => {
    api.createTodo(newTodo)
  }

  return (
    <div>
      <p className='title'>TO DO LIST!</p>
      <div className='list'>
        <List title='Pending' className='pending' todos={todos.filter(todo => !todo.resolved)} changed={(alt) => changedTodos(alt)} deleted={(alt) => deleteTodos(alt)} />
        <List title='Resolved' className='resolved' todos={todos.filter(todo => todo.resolved)} changed={(alt) => changedTodos(alt)} deleted={(alt) => deleteTodos(alt)} />
      </div>
      <div className='addForm'>
        <Icon type='add' onClick={() => setFormVisible(!formVisible)} />
        <form className={formVisible ? 'todoForm' : 'invisible'}>
          <label> To Do:</label>
          <input type="text" />
          <label> Date:</label>
          <input type="date" />
          <div className='selectBlock'>
            <label> Priority:
            <select>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <button type="submit"> Save ToDo</button>
          </div>
        </form>
      </div>
      <div className='subtitles'>
        <p>Subtitles:</p>
        <div className='high'>High Priority</div>
        <div className='low'>Low Priority</div>
      </div>
    </div>
  )
}

export default App