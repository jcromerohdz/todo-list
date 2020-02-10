import header from './header';
import projects from './projects';
const view = (() => {
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
          projects(content);
          break;
        default:
          projects(content);
      }
  }

  const setUp = () => {
      let content = document.querySelector('#content');
      content.innerHTML = template();
      renderHeader();
      render('projects');
  };

  return {setUp}
})();

export default view;
