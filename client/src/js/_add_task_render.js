import { state } from './main';

export default () => {
  const $todolistList = document.querySelector('.todolist__list');

  const $frag = document.createDocumentFragment();
  const $todolistItem = document.createElement('li');
  $todolistItem.classList.add('todolist__item', 'isActive');

  $todolistItem.innerHTML = `
  <input class="todolist__checkbox" type="checkbox">
  <span class="todolist__ti tle">${state.task}</span>
  <span class="todolist__repeat">0 / ${state.count}</span>
  <button class="todolist__btn"></button>
  `;

  $frag.appendChild($todolistItem);
  $todolistList.appendChild($frag);
};