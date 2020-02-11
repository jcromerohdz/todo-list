/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import projectController from '../controllers/project';

const controller = (() => {
  let data = {projects: []};
  let view;
  let project = projectController;

  const setView = (item) =>{
      view = item;
      project.setData(data, view);
  };

  return {setView, data, project};
})();


export default controller;
