import { timerState, time } from './timerState';

const $body = document.querySelector('body');
const $timerStart = document.querySelector('label[for="timerStart"]');
const $timerCountdown = document.querySelector('.timer__countdown');
const $timerMenu = document.querySelector('.timer__menu');

export const exportTime = {
  min: time.pomodoroMin,
  sec: 0
};

export const render = () => {
  $timerCountdown.textContent = `${exportTime.min}:${exportTime.sec}`;
};

export const selectMode = () => {
  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    [...$timerMenu.children].forEach(v => {
      v.firstChild.classList.remove('isActive');
    });

    e.target.classList.add('isActive');

    timerState.state = e.target.textContent;

    if (timerState.state === 'Pomodoro') {
      $body.style.backgroundColor = 'rgb(219, 82, 77)';
      $timerStart.style.color = 'rgb(219, 82, 77)';
      exportTime.min = time.pomodoroMin;
      render();
    } else if (timerState.state === 'Short Break') {
      $body.style.backgroundColor = 'rgb(70, 142, 145)';
      $timerStart.style.color = 'rgb(70, 142, 145)';
      exportTime.min = time.shortBreakMin;
      render();
    } else {
      $body.style.backgroundColor = 'rgb(67, 126, 168)';
      $timerStart.style.color = 'rgb(67, 126, 168)';
      exportTime.min = time.longBreakMin;
      render();
    }
  });
};

document.addEventListener('DOMContentLoaded', render());