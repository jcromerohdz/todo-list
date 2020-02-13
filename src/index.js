import view from './js/views/index';
import controller from './js/controllers/index';
/* eslint-disable-next-line */
import Swal from 'sweetalert2';

controller.setView(view);
view.setUp(controller);
