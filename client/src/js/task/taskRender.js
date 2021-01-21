import base from './taskState';

export default function render() {
  // DOM
  const $todoList = document.querySelector('.todolist__list');
  const $summeryCont = document.querySelector('.summary');
  const $estCount = document.querySelector('.estCount');

  let html = '';

  base.tasks.forEach(({ id, content, completed, pomodoro, noteActive, note }) => {
    html += `<li class="list__item isActive" id=${id}>
    <input class="list__checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <span class="list__title" style="text-decoration: ${completed ? 'line-through' : 'none' }">${content}</span>
    <span class="list__repeat">0/${pomodoro}</span>
    <button class="list__btn"><i class="fa fa-ellipsis-v fa-lg"></i></button>
    <p class="list__note ${noteActive ? 'is-active' : ''}">${note}</p>
  </li>`;
  });

  $todoList.innerHTML = html;

  if (base.tasks.length) {
    const est = base.tasks.reduce((acc, cur) => acc + +cur.pomodoro, 0);
    $summeryCont.classList.add('is-active');
    $estCount.textContent = est;
  } else if (!base.tasks.length) {
    $summeryCont.classList.remove('is-active');
  }
}