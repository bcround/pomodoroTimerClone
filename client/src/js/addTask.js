import { state } from './main';

export function foo() {
  const $addTaskBtn = document.querySelector('.todolist__add-btn');
  const $addModal = document.querySelector('.todolist__add-todo');
  
  const $InputTodo = document.getElementById('inputTodo');
  const $saveBtn = document.querySelector('.footer__save');

  $addTaskBtn.onclick = () => {
    $addModal.classList.add('is-active');
  };

  $saveBtn.onclick = e => {
    state.task += $InputTodo.value;
    $addModal.classList.remove('is-active');
  };
}