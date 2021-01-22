import user from './taskState';
import render from './taskRender';

export default () => {
  // DOM
  const $todoList = document.querySelector('.todolist__list');

  $todoList.addEventListener('click', e => {
    if (!e.target.matches('.list__item > .list__btn')) return;
    const id = +e.target.parentNode.id;
    user.tasks = user.tasks.filter(task => task.id !== id);
    render();
  });
};
