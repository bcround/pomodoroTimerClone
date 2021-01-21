import { base } from './main';

export default function render() {
  // DOM
  const $todoList = document.querySelector('.todolist__list');
  let html = '';

  base.tasks.forEach(({ id, content, completed, pomodoro }) => {
    html += `<li class="list__item isActive" id=${id}>
    <input class="list__checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <span class="list__title">${content}</span>
    <span class="list__repeat">0/${pomodoro}</span>
    <button class="list__btn"></button>
  </li>`;
  });

  $todoList.innerHTML = html;
}