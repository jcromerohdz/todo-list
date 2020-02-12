/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import Project from '../models/project';
import createProjectWindow from '../views/newProject';

const projectController = (()=>{
  let data;
  let view;
  const setData = (d, v) => {
    data = d;
    view = v;
  }
  const addProject = () =>{
      Swal.fire({
      title: '<strong>Add Project</strong>',
      icon: 'info',
      html: createProjectWindow(),
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      onClose: () =>{
        let projectName = document.querySelector("#projectName").value;
        if(projectName) {
          let project = new Project(projectName, data.projects.length);
          data.projects.push(project);
        }
      },
      })
      .then (() =>{
        view.render('projects');
      });
  };
  const showProject = (event) => {
    let id = event.target.id.split("-")[1];
    data.currentProject = id;
    view.render('itemList');
  }
  return {setData, addProject, showProject}
})();

export default projectController;
