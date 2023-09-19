class TodoModel {
    constructor() {
        this.todos = [];
    }


addTodo(title) {
    const todo = {title, completed: false};
    this.todos.push(todo);
}

markCompleted(index) {
    this.todo[index].completed = true;
}

getAllTodos() {
    return this.todos;
}
}

export default TodoModel;