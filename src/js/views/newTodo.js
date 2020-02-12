const createTodoWindow = () =>{
  return `
    <label>Title</label>
    <input type="text" class="form-control" id="todoTitle">
    <label>Description</label>
    <textarea type="text"  id="todoDescription" class="form-control"> </textarea>
    <label>Date</label>
    <input type="date" id="todoDate" class="form-control">
    <label>Priority</label>
    <select class="custom-select" id="todoPriority">
      <option value="Low">Low</option>
      <option value="Medium" selected>Medium</option>
      <option value="High">High</option>
    </select>
    `
};

export default createTodoWindow;
