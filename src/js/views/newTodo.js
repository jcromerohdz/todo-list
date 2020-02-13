const createTodoWindow = (item = null) => `
    <label>Title</label>
    <input type="text" class="form-control" id="todoTitle" value="${item ? item.title : ''}">
    <label>Description</label>
    <textarea type="text"  id="todoDescription" class="form-control">${item ? item.description : ''} </textarea>
    <label>Date</label>
    <input type="date" id="todoDate" class="form-control" value="${item ? item.duedate : ''}">
    <label>Priority</label>
    <select class="custom-select" id="todoPriority">
      <option value="Low" ${item && item.priority === 'Low' ? 'selected' : ''}>Low</option>
      <option value="Medium" ${(!item || item.priority === 'Medium') ? 'selected' : ''}>Medium</option>
      <option value="High" ${item && item.priority === 'High' ? 'selected' : ''}>High</option>
    </select>
    `;

export default createTodoWindow;
