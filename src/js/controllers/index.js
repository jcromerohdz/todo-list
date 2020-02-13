/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import projectController from './project';
import itemListController from './itemList';
import Project from '../models/project';
import Todo from '../models/todo';

const controller = (() => {
  const fakeObject = {
    title: 'Example 1',
    description: 'a bit of',
    duedate: '2020-01-12',
    priority: 'Low',
  };
  const data = {
    projects: [],
    currentProject: null,
  };
  let view;
  const project = projectController;
  const itemList = itemListController;

  const setView = (item) => {
    view = item;
    // getting data from localStorage
    if (localStorage.getItem('todoList') !== null) {
      const fromLocal = JSON.parse(localStorage.getItem('todoList'));
      fromLocal.projects.forEach((it) => {
        const project = new Project(it.name, it.id);
        project.todoCounter = it.todoCounter;
        project.todos = it.todos.map((item) => new Todo(item));
        data.projects.push(project);
      });
    } else {
      // geting fake initial data.
      const exampleProject = new Project('Example Project', 0);
      fakeObject.id = exampleProject.getTodoCount();
      const todo1 = new Todo(fakeObject);
      fakeObject.title = 'Example 2';
      fakeObject.id = exampleProject.getTodoCount();
      const todo2 = new Todo(fakeObject);
      exampleProject.todos.push(todo1);
      exampleProject.todos.push(todo2);
      data.projects.push(exampleProject);
    }
    project.setData(data, view);
    itemList.setData(data, view);
  };

  return {
    setView, data, project, itemList,
  };
})();


export default controller;
