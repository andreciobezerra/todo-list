let todos = [{ id: 1, title: 'Shit', due: '01/01/2012', priority: 'High', resolved: false },
  { id: 2, title: 'Eat', due: '01/01/2012', priority: 'High', resolved: true },
  { id: 3, title: 'Sleep', due: '01/01/2012', priority: 'Low', resolved: false },
  { id: 4, title: 'Code', due: '03/02/2020', priority: 'High', resolved: false },
  { id: 5, title: 'Pay', due: '01/01/2012', priority: 'Low', resolved: true },
] 

const createTodo = (newTodo) => todos.push(newTodo)

const readTodos = () => todos

const updateTodo = (xablau) => console.log('xablau')

const deleteTodo = () => todos.splice(0,-1)

const api = {createTodo,readTodos, updateTodo, deleteTodo}

export default api