import { exportTime } from './selectMode';
import changeMode from './changeMode';

let { sec } = 0;

const $startBtn = document.querySelector('.timer__start');
const $timerCountdown = document.querySelector('.timer__countdown');
const $timerMenu = document.querySelector('.timer__menu');
const $buttonText = document.querySelector('label[for="timerStart"]');

const render = () => {
  $timerCountdown.textContent = `${exportTime.min}:${sec}`;
};

let stopInterval = 0;

export default () => {
  $startBtn.addEventListener('click', () => {
    sec = exportTime.sec;
    if ($startBtn.checked) {
      $buttonText.textContent = 'STOP';
      stopInterval = setInterval(() => {
        if (sec === 0) {
          exportTime.min--;
          sec = 1;
        } else {
          sec--;
        }
        render();
        if (exportTime.min < 0) {
          changeMode();
        }
      }, 1000);
    } else {
      $buttonText.textContent = 'START';
      clearInterval(stopInterval);
    }
  });

  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;
    clearInterval(stopInterval);
    $startBtn.checked = false;
    $buttonText.textContent = 'START';
  });
};