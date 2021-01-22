import user from './taskState';
import render from './taskRender';

export default () => {
  const $deleteCompletedBtn = document.querySelector('.todolist__setting');

  $deleteCompletedBtn.addEventListener('click', e => {
    console.log(e.target);
    user.tasks = user.tasks.filter(task => !task.completed);
    render();
  });
};
