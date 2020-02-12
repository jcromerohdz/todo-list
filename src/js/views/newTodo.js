const createTodoWindow = (item=null) =>{
  return `
    <label>Title</label>
    <input type="text" class="form-control" id="todoTitle" value="${item ? item.title : ""}">
    <label>Description</label>
    <textarea type="text"  id="todoDescription" class="form-control">${item ? item.description : ""} </textarea>
    <label>Date</label>
    <input type="date" id="todoDate" class="form-control" value="${item ? item.duedate : ""}">
    <label>Priority</label>
    <select class="custom-select" id="todoPriority" value="${item ? item.priority : ""}">
      <option value="Low">Low</option>
      <option value="Medium" selected>Medium</option>
      <option value="High">High</option>
    </select>
    `
};

export default createTodoWindow;
