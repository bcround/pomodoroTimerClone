import user from './taskState';
import render from './taskRender';
import deleteTask from './deleteTask';

const $addBtn = document.querySelector('.todolist__add-btn');
const $addTodoModal = document.querySelector('.todolist__add-todo');

const $inputTodo = document.querySelector('.todolist__input-todo');
const $noteBtn = document.querySelector('.todolist__add-note');
const $inputNote = document.getElementById('todolistNote');

const $inputCount = document.getElementById('inputNumber');
const $upBtn = document.querySelector('.count__up');
const $downBtn = document.querySelector('.count__down');

const $saveBtn = document.querySelector('.footer__save');
const $cancelBtn = document.querySelector('.footer__cancel');

export default () => {
  const generateId = () => Math.max(...user.tasks.map(user => user.id), 0) + 1;
  const validateNote = () => {
    if ($inputNote.value) return true;
    return false;
  };
  const addTodo = (content, note, count) => {
    user.tasks = [...user.tasks, {
      id: generateId(), content, completed: false, pomodoro: count, noteActive: validateNote(), note
    }];
    render();
  };

  const reset = () => {
    $inputTodo.value = '';
    $inputNote.value = '';
    $inputNote.classList.remove('isActive');
    $inputCount.value = 1;
    $noteBtn.classList.add('is-active');
  };

  $addBtn.onclick = () => {
    $addTodoModal.classList.add('is-active');
    $addBtn.classList.remove('is-active');
  };

  $inputTodo.oninput = () => {
    $saveBtn.removeAttribute('disabled');
    $saveBtn.classList.add('is_active');
  };

  $upBtn.onclick = () => {
    $inputCount.value++;
  };

  $downBtn.onclick = () => {
    $inputCount.value--;
  };

  $noteBtn.onclick = e => {
    e.target.classList.remove('is-active');
    $inputNote.classList.add('isActive');
  };

  $saveBtn.onclick = () => {
    const content = $inputTodo.value;
    const note = $inputNote.value;
    const count = $inputCount.value;

    if (!content) return;

    addTodo(content, note, count);
    reset();
  };

  $cancelBtn.onclick = () => {
    $addTodoModal.classList.remove('is-active');
    $addBtn.classList.add('is-active');
    reset();
  };
};