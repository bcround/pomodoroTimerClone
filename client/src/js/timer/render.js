import state from './timerState';

const $body = document.querySelector('body');
const $timerStart = document.querySelector('label[for="timerStart"]');
const $timerCountdown = document.querySelector('.timer__countdown');

export default () => {
  if (state.state === 'Pomodoro') {
    $body.style.backgroundColor = 'rgb(219, 82, 77)';
    $timerStart.style.color = 'rgb(219, 82, 77)';
    $timerCountdown.textContent = `${state.p}:${0}`;
  } else if (state.state === 'Short Break') {
    $body.style.backgroundColor = 'rgb(70, 142, 145)';
    $timerStart.style.color = 'rgb(70, 142, 145)';
    $timerCountdown.textContent = `${state.s}:${0}`;
  } else if (state.state === 'Long Break') {
    $body.style.backgroundColor = 'rgb(67, 126, 168)';
    $timerStart.style.color = 'rgb(67, 126, 168)';
    $timerCountdown.textContent = `${state.l}:${0}`;
  }
};