import base from './taskState';

export default function render() {
  // DOM
  const $todoList = document.querySelector('.todolist__list');
  const $todosBrief = document.querySelector('.todos__brief');
  const $todosWorkingOn = document.querySelector('.todos__working-on');

  let html = '';
  if (base.tasks.length === 0) {
    $todosBrief.classList.add('is-active');
    $todosWorkingOn.classList.remove('is-active');
  }

  base.tasks.forEach(({ id, content, active, completed, pomodoro, noteActive, note }) => {
    html += `<li class="list__item ${active ? 'is-active' : ''}" id=${id}>
    <input class="list__checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <span class="list__title" style="text-decoration: ${completed ? 'line-through' : 'none' }">${content}</span>
    <span class="list__repeat">0/${pomodoro}</span>
    <button class="list__btn"><i class="fa fa-ellipsis-v fa-lg"></i></button>
    <p class="list__note ${noteActive ? 'is-active' : ''}">${note}</p>
  </li>`;
  });

  $todoList.innerHTML = html;
}