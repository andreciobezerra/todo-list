import React, { useState, useEffect } from 'react';
import List from './List';
import Icon from './Icon';
import api from '../api';
import todo from '../todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [newTodo, setNewTodo] = useState(todo());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let data = await api.readTodos();
      let todos = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(todos);
      setLoading(false);
    };

    fetchData();

  }, []);

  const changedTodos = async (alt) => {
    let id = alt.id;
    delete alt['id'];
    setLoading(true);
    await api.updateTodo(id, alt);
    window.location.reload();
  };

  const deleteTodos = async (alt) => {
    setLoading(true);
    await api.deleteTodo(alt.id);
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let id = parseInt(todos[todos.length-1].id);
    await api.createTodo(newTodo, id+1);
    window.location.reload();
  };

  if (loading) {
    return (
      <div className='loading'>
        <img src="images/loading.gif" alt="Is Loading" />
      </div>
    );
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
        <form className={formVisible ? 'todoForm' : 'invisible'} onSubmit={handleSubmit}>
          <label> To Do:</label>
          <input type="text"
            defaultValue=''
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })} required
          />
          <label> Date:</label>
          <input type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setNewTodo({ ...newTodo, due: e.target.value })}
          />
          <div className='selectBlock'>
            <label> Priority:
            <select defaultValue="High" onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })} >                <option value="High">High</option>
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
  );
};

export default App;