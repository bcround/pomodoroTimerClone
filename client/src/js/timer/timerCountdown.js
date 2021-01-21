const time = {
  pomodoroMin: 25,
  shortBreakMin: 5,
  longBreakMin: 15
};

const $timerCountdown = document.querySelector('.timer__countdown');
const $startBtn = document.querySelector('.timer__start');

let min = time.pomodoroMin;
let sec = 0;

const render = () => {
  $timerCountdown.textContent = `${min}:${sec}`;
};

let stopInterval = 0;

export default () => {
  document.addEventListener('DOMCuntentLoaded', render());

  $startBtn.addEventListener('click', () => {
    if ($startBtn.checked) {
      stopInterval = setInterval(() => {
        if (sec === 0) {
          min -= 1;
          sec = 59;
        } else {
          sec -= 1;
        }
        render();
      }, 1000);
    } else {
      clearInterval(stopInterval);
    }
  });
};