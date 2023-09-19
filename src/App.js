import React, { Component } from "react";
import TodoModel from "./TodoModel";
import TodoController from "./TodoController";

class App extends Component {
  constructor(props) {
    super(props);

    // Move your initialization code to the constructor
    const model = new TodoModel();
    const view = new TodoView();
    const controller = new TodoController(model, view);

    controller.addTodo("Buy vegetables");
    controller.addTodo("Finish presentation");
    controller.markCompleted(1);
    controller.run();

    // You can set the resulting state in the constructor if needed
    this.state = {
      // Set your state properties here if necessary
    };
  }

  render() {
    // You can render your React components here
    return <div>{/* JSX elements go here */}</div>;
  }
}

export default App;
