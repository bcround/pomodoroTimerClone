import { exportTime } from './selectMode';

// let min = time.pomodoroMin;
let { sec } = 0;

const $startBtn = document.querySelector('.timer__start');
const $timerCountdown = document.querySelector('.timer__countdown');
const $timerMenu = document.querySelector('.timer__menu');
export const render = () => {
  $timerCountdown.textContent = `${exportTime.min}:${sec}`;
};

let stopInterval = 0;

export default () => {
  $startBtn.addEventListener('click', () => {
    sec = exportTime.sec;
    if ($startBtn.checked) {
      stopInterval = setInterval(() => {
        if (sec === 0) {
          exportTime.min--;
          sec = 59;
        } else {
          sec--;
        }
        render();
      }, 1000);
    } else {
      clearInterval(stopInterval);
    }
  });

  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;
    clearInterval(stopInterval);
  });
};