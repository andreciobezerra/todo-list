import React from 'react'
import List from './List'

let todos = [
  { id:1, title:'Shit', description:'Xablau!', due:'01/01/2012', priority:'High', resolved:false},
  { id:2, title:'Eat', description:'Xablau!', due:'01/01/2012', priority:'High', resolved:true},
  { id:3, title:'Sleep', description:'Xablau!', due:'01/01/2012', priority:'Low', resolved:false},
  { id:4, title:'Code', description:'Xablau!', due:'03/02/2020', priority:'High', resolved:false},
  { id:5, title:'Pay', description:'Xablau!', due:'01/01/2012', priority:'Low', resolved:true},

]

const App = () => {
  return (
    <div>
      <p className='title'>TO DO LIST!</p>
      <div className='list'>
        <List title='Pending' className='pending'  todos = {todos.filter(todo => !todo.resolved)}/>
        <List title='Resolved' className='resolved' todos = {todos.filter(todo => todo.resolved)}/>
      </div>
      <div className='subtitles'>
        <p>Subtitles</p>
        <div className='high'>High Priority</div>
        <div className='low'>Low Priority</div>
      </div>
    </div>
  )
}

export default App