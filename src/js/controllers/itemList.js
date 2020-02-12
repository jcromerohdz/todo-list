/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import Project from '../models/project';
import Todo from '../models/todo';
import createTodoWindow from '../views/newTodo';
import showTodoWindow from '../views/showTodo';

const itemListController = (()=>{
  let data;
  let view;
  const setData = (d, v) => {
    data = d;
    view = v;
  }

  const home = () => {
    view.render('projects');
  }

  const newTodo = () => {
    Swal.fire({
    title: '<strong>Add Todo</strong>',
    icon: 'info',
    html: createTodoWindow(),
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    onClose: () =>{

      let title = document.querySelector("#todoTitle").value;
      let duedate = document.querySelector("#todoDate").value;
      let description = document.querySelector("#todoDescription").value;
      let priority = document.querySelector("#todoPriority").value;
      let id = data.projects[data.currentProject].getTodoCount();

      if(title) {
        let todo = new Todo({title, description, duedate, priority, id});
        data.projects[data.currentProject].todos.push(todo);
      }
    },
    })
    .then (() =>{
      view.render('itemList');
    });
  }

  const showTodo = (event) => {
    let id = event.target.id.split("-")[1];
    let todo = data.projects[data.currentProject].todos.find(x => x.id == id);
    Swal.fire({
    title: `<strong>Todo #${todo.id}</strong>`,
    icon: 'info',
    html: showTodoWindow(todo),
    showCloseButton: true,
    });
  }

  const editTodo = () => {}
  const deleteTodo = () => {}

  return {setData, home, newTodo, showTodo, editTodo, deleteTodo}
})();

export default itemListController;
