class TodoView {
    showTodos(todos) {
      todos.forEach((todo, index) => {
        console.log(`[${todo.completed ? 'X' : ''}] ${index + 1}. ${todo.text}`);
      });
    }
  
    showMessage(message) {
      console.log(message);
    }
  }
  
  export default TodoView;
  