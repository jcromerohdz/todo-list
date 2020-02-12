const showTodoWindow = (todo) =>{
  return `
    <b>Title: </b> ${todo.title}<br>
    <b>Description: </b> ${todo.description}<br>
    <b>Priority: </b> ${todo.priority}<br>
    <b>Due Date: </b> ${todo.duedate}<br>
    `
};

export default showTodoWindow;
