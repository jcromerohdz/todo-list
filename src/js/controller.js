/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import createProjectWindow from './views/newProject';

const controller = (() => {
  let data = {projects: []};
  let view;

  const setView = (item) =>{
      view = item;
  };

  const clickHandler = () =>{
      console.log("Click Handler Works!!");

      Swal.fire({
      title: '<strong>Add Project</strong>',
      icon: 'info',
      html: createProjectWindow(),
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      onClose: () =>{

          let project = document.querySelector("#projectName").value;
          if(project) data.projects.push(project);


      },
      })
      .then (() =>{
        view.render('projects');
      });
  };

  return {clickHandler, setView, data};
})();


export default controller;
