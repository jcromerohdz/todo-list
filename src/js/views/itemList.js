const itemList = (content, project, controller) => {
  const items = project.todos.map((x) => `<tr>
      <td>${x.title}</td>
      <td>${x.duedate}</td>
      <td>${x.priority}</td>
      <td>
        <button type="button" class="btn btn-info" id="todoShow-${x.id}" name="button">Show</button>
        <button type="button" class="btn btn-success" id="todoEdit-${x.id}" name="button">Edit</button>
        <button type="button" class="btn btn-danger" id="todoDelete-${x.id}" name="button">Delete</button>
      </td>
    </tr>`);
  content.innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-8 offset-lg-2 row my-3">
        <div class="col-6">
          <h2>List</h2>
        </div>
        <div class="col-6 text-right">
          <button class="btn btn-success" id="newTodo">New todo +</button>
          <button class="btn btn-info" id="home">Home</button>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Due Date</th>
              <th scope="col">Priority</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${items.join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `;
  project.todos.forEach((i) => {
    document.querySelector(`#todoShow-${i.id}`).addEventListener('click', (event) => controller.showTodo(event));
    document.querySelector(`#todoEdit-${i.id}`).addEventListener('click', (event) => controller.editTodo(event));
    document.querySelector(`#todoDelete-${i.id}`).addEventListener('click', (event) => controller.deleteTodo(event));
  });
  document.querySelector('#home').addEventListener('click', () => controller.home());
  document.querySelector('#newTodo').addEventListener('click', () => controller.newTodo());
};
export default itemList;
