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

  const getTodo = () => {

    let title = document.querySelector("#todoTitle").value;
    let duedate = document.querySelector("#todoDate").value;
    let description = document.querySelector("#todoDescription").value;
    let priority = document.querySelector("#todoPriority").value;

    return {title, description, duedate, priority};
  }

  const newTodo = () => {
    Swal.fire({
    title: '<strong>Add Todo</strong>',
    icon: 'info',
    html: createTodoWindow(),
    showCloseButton: true,
    focusConfirm: false,
    onClose: () =>{

      let todoForm = getTodo();
      todoForm.id = data.projects[data.currentProject].getTodoCount();

      if(todoForm.title) {
        let todo = new Todo(todoForm);
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

  const editTodo = (event) => {
    let id = event.target.id.split("-")[1];
    let todo = data.projects[data.currentProject].todos.find(x => x.id == id);
    Swal.fire({
    title: `<strong>Edit #${todo.id}</strong>`,
    icon: 'info',
    html: createTodoWindow(todo),
    showCloseButton: true,
    focusConfirm: false,
    onClose: () =>{
      todo.fill(getTodo());
    },
    })
    .then (() =>{
      view.render('itemList');
    });
  }
  
const deleteTodo = (event) => {
  let id = event.target.id.split("-")[1];
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
  if (result.value) {
    let index = data.projects[data.currentProject].todos.findIndex(x => x.id == id);
    if (index != -1) {
      data.projects[data.currentProject].todos.splice(index, 1);
      Swal.fire('Deleted!','Your todo has been deleted.','success');
      view.render('itemList');
    }else{
      Swal.fire('Error!', 'Something wrong!.','error');
    }
  }
})
  }

  return {setData, home, newTodo, showTodo, editTodo, deleteTodo}
})();

export default itemListController;
