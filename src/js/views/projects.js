const projects = (content, data, controller) => {
  const items = data.map((x) => `<li class="list-group-item" id="projectClick-${x.id}">${x.name}</li>`);
  content.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3 row">
          <div class="col-12 py-3">
            <h2 class="d-inline">Projects</h2>
            <button type="button" class="btn btn-success" id="createProject"> + Add Project </button>
          </div>
          <div class="col-12 py-3">
            <ul class="list-group">
              ${items.join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  data.forEach((i) => {
    document.querySelector(`#projectClick-${i.id}`).addEventListener('click', (event) => controller.showProject(event));
  });
  const createButton = document.querySelector('#createProject');
  createButton.addEventListener('click', () => controller.addProject());
};
export default projects;
