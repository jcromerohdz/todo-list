/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import projectController from '../controllers/project';
import itemListController from '../controllers/itemList';
import Project from '../models/project';
import Todo from '../models/todo';

const controller = (() => {
  let fakeObject = {
    title: "Example 1",
    description: "a bit of",
    duedate: "2020-01-12",
    priority: "Low",
  }
  let data = {
    projects: [],
    currentProject: null,
  };
  let view;
  let project = projectController;
  let itemList = itemListController;

  const setView = (item) =>{
      view = item;
      // getting data from localStorage
      if (localStorage.getItem('todoList') !== null) {
        let fromLocal = JSON.parse(localStorage.getItem('todoList'));
        fromLocal.projects.forEach((it) => {
          let project = new Project(it.name, it.id);
          project.todoCounter = it.todoCounter;
          project.todos = it.todos.map((item) => new Todo(item));
          data.projects.push(project);
        });
      } else {
        // geting fake initial data.
        let exampleProject = new Project('Example Project', 0);
        fakeObject.id = exampleProject.getTodoCount();
        let todo1 = new Todo(fakeObject);
        fakeObject.title = "Example 2";
        fakeObject.id = exampleProject.getTodoCount();
        let todo2 = new Todo(fakeObject);
        exampleProject.todos.push(todo1);
        exampleProject.todos.push(todo2);
        data.projects.push(exampleProject);
      }
      project.setData(data, view);
      itemList.setData(data, view);
  };

  return {setView, data, project, itemList};
})();


export default controller;
