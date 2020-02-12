export default class Todo {
  constructor(obj){
    const {title, description, duedate, priority, id} = obj;
    Object.assign(this, {title, description, duedate, priority, id});
  }

  fill(obj){
    const {title, description, duedate, priority} = obj;
    Object.assign(this, {title, description, duedate, priority});
  }
}
