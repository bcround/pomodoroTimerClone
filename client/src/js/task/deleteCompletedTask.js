import user from './taskState';
import render from './taskRender';

export default () => {
  const $deleteCompletedBtn = document.querySelector('.todolist__setting');

  $deleteCompletedBtn.addEventListener('click', () => {
    user.tasks = user.tasks.filter(task => !task.completed);
    render();
  });
};
