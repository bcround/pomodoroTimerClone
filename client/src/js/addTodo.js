import user from './main.js';
import render from './taskRender';

const $addBtn = document.querySelector('.todolist__add-btn');
const $addTodoModal = document.querySelector('.todolist__add-todo');

const $labelTodo = document.querySelector('.todolist__label-todo');
const $inputTodo = document.querySelector('.todolist__input-todo');
const $noteBtn = document.querySelector('.todolist__add-note');
const $inputNote = document.getElementById('todolistNote');

const $countCot = document.querySelector('.todolist__count');
const $inputCount = document.getElementById('inputNumber');
const $upBtn = document.querySelector('.count__up');
const $downBtn = document.querySelector('.count__down');

const $saveBtn = document.querySelector('.footer__save');
const $cancelBtn = document.querySelector('.footer__cancel');
export default () => {
  const generateId = () => Math.max(...user.tasks.map(user => user.id), 0);
  const validateNote = () => {
    if ($inputNote.value) return true;
    return false;
  };
  const addTodo = (content, note, count) => {
    user.tasks = [...user.tasks, {
      id: generateId(), content, completed: false, pomodoro: count, noteActive: validateNote() ,note
    }];
    render();
  };

  const reset = () => {
    $inputTodo.value = '';
    $inputNote.value = '';
    $inputCount.value = 1;
  };

  $addBtn.onclick = () => {
    $addTodoModal.classList.add('is-active');
  };

  $inputTodo.onfocus = () => {
    $labelTodo.textContent = '';
  };

  $inputTodo.onblur = e => {
    if (e.target.value) return;
    $labelTodo.textContent = 'What are you working on?';
    $saveBtn.setAttribute('disabled', 'disabled');
    $saveBtn.classList.remove('is_active');
  };

  $inputTodo.oninput = () => {
    $saveBtn.removeAttribute('disabled');
    $saveBtn.classList.add('is_active');
  };

  $countCot.onclick = e => {
    // TODO: span 클릭 시 안됨
    if (e.target === $upBtn) $inputCount.value++;
    else if (e.target === $downBtn) $inputCount.value--;
  };

  $noteBtn.onclick = e => {
    e.target.remove();
    $inputNote.classList.add('isActive');
  };

  $saveBtn.onclick = () => {
    const content = $inputTodo.value;
    const note = $inputNote.value;
    const count = $inputCount.value;

    if (!content) return;

    addTodo(content, note, count);
    reset();
    $inputTodo.focus();
  };

  $cancelBtn.onclick = () => {
    $addTodoModal.classList.remove('is-active');
    reset();
  };
};