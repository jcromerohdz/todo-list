/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import Todo from '../models/todo';
import createTodoWindow from '../views/newTodo';
import showTodoWindow from '../views/showTodo';

const itemListController = (() => {
  let data;
  let view;
  const setData = (d, v) => {
    data = d;
    view = v;
  };

  const home = () => {
    view.render('projects');
  };

  const getTodo = () => {
    const title = document.querySelector('#todoTitle').value;
    const duedate = document.querySelector('#todoDate').value;
    const description = document.querySelector('#todoDescription').value;
    const priority = document.querySelector('#todoPriority').value;

    return {
      title, description, duedate, priority,
    };
  };

  const newTodo = () => {
    Swal.fire({
      title: '<strong>Add Todo</strong>',
      icon: 'info',
      html: createTodoWindow(),
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      focusConfirm: false,
    })
      .then((result) => {
        if (result.value) {
          const todoForm = getTodo();
          todoForm.id = data.projects[data.currentProject].getTodoCount();

          if (todoForm.title) {
            const todo = new Todo(todoForm);
            data.projects[data.currentProject].todos.push(todo);
          }
          view.render('itemList');
        }
      });
  };

  const showTodo = (event) => {
    const id = parseInt(event.target.id.split('-')[1], 10);
    const todo = data.projects[data.currentProject].todos.find(x => x.id === id);
    Swal.fire({
      title: `<strong>Todo #${todo.id}</strong>`,
      icon: 'info',
      html: showTodoWindow(todo),
      showCloseButton: true,
    });
  };

  const editTodo = (event) => {
    const id = parseInt(event.target.id.split('-')[1], 10);
    const todo = data.projects[data.currentProject].todos.find(x => x.id === id);
    Swal.fire({
      title: `<strong>Edit #${todo.id}</strong>`,
      icon: 'info',
      html: createTodoWindow(todo),
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      focusConfirm: false,
    })
      .then((result) => {
        if (result.value) {
          todo.fill(getTodo());
          view.render('itemList');
        }
      });
  };

  const deleteTodo = (event) => {
    const id = parseInt(event.target.id.split('-')[1], 10);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        const index = data.projects[data.currentProject].todos.findIndex(x => x.id === id);
        if (index !== -1) {
          data.projects[data.currentProject].todos.splice(index, 1);
          Swal.fire('Deleted!', 'Your todo has been deleted.', 'success');
          view.render('itemList');
        } else {
          Swal.fire('Error!', 'Something wrong!.', 'error');
        }
      }
    });
  };

  return {
    setData, home, newTodo, showTodo, editTodo, deleteTodo,
  };
})();

export default itemListController;
