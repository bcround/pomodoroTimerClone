import user from './taskState';
import render from './taskRender';

const $todoList = document.querySelector('.todolist__list');

export default () => {
  $todoList.onchange = e => {
    user.tasks = user.tasks.map(todo => todo.id === +e.target.parentNode.id ? { ...todo, completed: !todo.completed } : todo);
    render();
  };
};