// api for comunication with Google Firestore;
import db from './firebase';

const createTodo = async (newTodo, id) => await db.collection('todos').doc(id.toString()).set(newTodo);

const readTodos = () => db.collection('todos').get();

const updateTodo = (id, alt) => db.collection('todos').doc(id.toString()).update({resolved: alt.resolved});

const deleteTodo = (id) => db.collection('todos').doc(id.toString()).delete();

const api = { createTodo, readTodos, updateTodo, deleteTodo };

export default api;