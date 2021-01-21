import { timerState, time } from './timerState';
import { exportTime, render } from './selectMode';

const $body = document.querySelector('body');
const $timerStart = document.querySelector('label[for="timerStart"]');
const $pomodoro = document.querySelector('.timer__btn:first-child');
const $shortBreak = document.querySelector('.timer__item:nth-child(2) > button');

export default () => {
  if (timerState.state === 'Pomodoro') {
    timerState.state = 'Short Break';
    $pomodoro.classList.remove('isActive');
    $shortBreak.classList.add('isActive');
  } else if (timerState.state === 'Short Break') {
    timerState.state = 'Pomodoro';
    $pomodoro.classList.add('isActive');
    $shortBreak.classList.remove('isActive');
  }

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
};