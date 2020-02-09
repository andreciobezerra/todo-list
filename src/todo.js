const todo = () => ({
  title: '',
  due: new Date().toISOString().slice(0, 10),
  priority: 'High',
  resolved: false
});

export default todo;