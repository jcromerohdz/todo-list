import view from './js/views/index';
import controller from './js/controller';
/* eslint-disable-next-line */
import Swal from 'sweetalert2';
controller.setView(view);
view.setUp(controller);
