import user from './taskState';
import render from './taskRender';

export default () => {
  // DOM
  const $taskList = document.querySelector('.todolist__list');
  const $currentTodo = document.querySelector('.current-todo');
  const $todosBrief = document.querySelector('.todos__brief');
  const $todosWorkingOn = document.querySelector('.todos__working-on');

  $taskList.addEventListener('click', e => {
    const id = +e.target.closest('.list__item').id;

    if (e.target.matches('.list__checkbox') || e.target.matches('.list__btn')) return;

    user.tasks = user.tasks.map(task => (task.id === id ? { ...task, active: true } : { ...task, active: false }));
    user.tasks.forEach(task => {
      if (task.active) {
        $currentTodo.textContent = task.content;
      }
    });
    $todosBrief.classList.remove('is-active');
    $todosWorkingOn.classList.add('is-active');
    render();
  });
};