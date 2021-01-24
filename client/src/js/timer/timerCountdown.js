import state from './timerState';
import changeMode from './changeMode';
import progress from './progress';

const $startBtn = document.querySelector('.timer__start');
const $timerCountdown = document.querySelector('.timer__countdown');
const $timerMenu = document.querySelector('.timer__menu');
const $buttonText = document.querySelector('label[for="timerStart"]');
const $settingBtn = document.querySelector('.setting');

const countdownRender = () => {
  if (state.state === 'Pomodoro') {
    $timerCountdown.textContent = `${state.curP}:${state.curPSec}`;
  } else if (state.state === 'Short Break') {
    $timerCountdown.textContent = `${state.curS}:${state.curSSec}`;
  } else if (state.state === 'Long Break') {
    $timerCountdown.textContent = `${state.curL}:${state.curLSec}`;
  }
};

let stopInterval = 0;

export default () => {
  $startBtn.addEventListener('click', () => {
    progress();
    if ($startBtn.checked) {
      $buttonText.textContent = 'STOP';
      stopInterval = setInterval(() => {
        if (state.state === 'Pomodoro') {
          if (state.curPSec === 0) {
            if (state.curP === 0) {
              state.curRepeat++;
              changeMode();
            }
            state.curP--;
            state.curPSec = 59;
          } else {
            state.curPSec--;
          }
        } else if (state.state === 'Short Break') {
          if (state.curSSec === 0) {
            if (state.curS === 0) {
              changeMode();
            }
            state.curS--;
            state.curSSec = 59;
          } else {
            state.curSSec--;
          }
        } else if (state.state === 'Long Break') {
          if (state.curLSec === 0) {
            if (state.curL === 0) {
              $buttonText.textContent = 'START';
              $startBtn.checked = '';
              clearInterval(stopInterval);
            } else {
              state.curL--;
              state.curLSec = 59;
            }
          } else {
            state.curLSec--;
          }
        }
        countdownRender();
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

  $settingBtn.addEventListener('click', () => {
    $startBtn.checked = false;
    $buttonText.textContent = 'START';
    clearInterval(stopInterval);
  });
};