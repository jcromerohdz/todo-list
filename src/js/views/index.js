import header from './header';
import projects from './projects';
import itemList from './itemList';
const view = (() => {
  let controller;
  const template = () => {
    return `
      <div id="header"></div>
      <div id="app"></div>
    `;
  }

  const renderHeader = () => {
      let content = document.querySelector('#header');
      header(content);
  }

  const render = (route) => {
      let content = document.querySelector('#app');
      switch (route) {
        case 'projects':
          projects(content, controller.data.projects, controller.project);
          break;
        case 'itemList':
          itemList(content, [{title:"test", duedate:"10/10/2020", priority:"mid"}], controller.itemList);
          break;
        default:
          projects(content, controller.data.projects, controller.project);
      }
  }

  const setUp = (cont) => {
      controller = cont;
      let content = document.querySelector('#content');
      content.innerHTML = template();
      renderHeader();
      render('projects');
  };



  return {setUp, render}
})();

export default view;
