export default class Project {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.todos = [];
    this.todoCounter = 0;
  }

  getTodoCount() {
    this.todoCounter += 1;
    return this.todoCounter;
  }
}
