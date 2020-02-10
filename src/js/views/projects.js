/* eslint-disable-next-line */
import Swal from 'sweetalert2';

const projects = (content) => {
  content.innerHTML =  `
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3 row">
          <div class="col-12 py-3">
            <h2 class="d-inline">Projects</h2>
            <button type="button" class="btn btn-success" id="createProject"> + Add Project </button>
          </div>
          <div class="col-12 py-3">
            <ul class="list-group">
              <li class="list-group-item active">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  const createProjectWindow = () =>{
    return `
          <label for="project_name">Project Name</label>
          <input type="text" class="form-control">
      `
  };

  const createProject = () =>{
        Swal.fire({
        title: '<strong>Add Project</strong>',
        icon: 'info',
        html: createProjectWindow(),
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        })
  }
  let createButton = document.querySelector('#createProject');
  createButton.addEventListener('click', () => createProject());
}
export default projects;
