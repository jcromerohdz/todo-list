/* eslint-disable-next-line */
import Swal from 'sweetalert2';
import Project from '../models/project';

const itemListController = (()=>{
  let data;
  let view;
  const setData = (d, v) => {
    data = d;
    view = v;
  }

  const home = () =>{
    view.render('projects');
  }

  return {setData, home}
})();

export default itemListController;
