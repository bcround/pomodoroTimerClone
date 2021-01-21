import timerState from './timerState';

let { state } = timerState;

const $body = document.querySelector('body');
const $timerStart = document.querySelector('label[for="timerStart"]');

export default () => {
  const $timerMenu = document.querySelector('.timer__menu');

  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    [...$timerMenu.children].forEach(v => {
      v.firstChild.classList.remove('isActive');
    });

    e.target.classList.add('isActive');

    state = e.target.textContent;

    if (state === 'Pomodoro') {
      $body.style.backgroundColor = 'rgb(219, 82, 77)';
      $timerStart.style.color = 'rgb(219, 82, 77)';
    } else if (state === 'Short Break') {
      $body.style.backgroundColor = 'rgb(70, 142, 145)';
      $timerStart.style.color = 'rgb(70, 142, 145)';
    } else {
      $body.style.backgroundColor = 'rgb(67, 126, 168)';
      $timerStart.style.color = 'rgb(67, 126, 168)';
    }
  });
};