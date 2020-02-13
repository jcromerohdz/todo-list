const header = (content) => {
  content.innerHTML = `
  <div class="container-fluid bg-dark text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-12 py-3">
          <h1>Todo App</h1>
        </div>
      </div>
    </div>
  </div>
  `;
};
export default header;
