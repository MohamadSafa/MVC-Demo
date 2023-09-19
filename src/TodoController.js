class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

addTodo(title) {
    this.model.addTodo(title);
    this.view.showMessage("Task added successfully !");
}

markCompleted(index) {
    this.model.markCompleted(index);
    this.view.showMessage("Task marked as completed!")
}

run() {
    const todos = this.model.getAllTodos();
    this.view.showTodos(todos);
}
}

export default TodoController;