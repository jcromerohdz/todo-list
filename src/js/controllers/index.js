/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import projectController from '../controllers/project';
import itemListController from '../controllers/itemList';
import Project from '../models/project';

const controller = (() => {
  let data = {projects: []};
  let view;
  let project = projectController;
  let itemList = itemListController;

  const setView = (item) =>{
      view = item;
      let exampleProject = new Project('Example Project');
      data.projects.push(exampleProject);
      project.setData(data, view);
      itemList.setData(data, view);
  };

  return {setView, data, project, itemList};
})();


export default controller;
