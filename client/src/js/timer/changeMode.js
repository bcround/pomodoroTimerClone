import state from './timerState';
import render from './render';
import progress from './progress';

const $pomodoro = document.querySelector('.timer__btn:first-child');
const $shortBreak = document.querySelector('.timer__item:nth-child(2) > button');
const $longBreak = document.querySelector('.timer__item:nth-child(3) > button');

const $startBtn = document.querySelector('.timer__start');

export default () => {
  if (state.state === 'Pomodoro') {
    if (state.repeat === state.curRepeat) {
      state.state = 'Long Break';
      $pomodoro.classList.remove('isActive');
      $longBreak.classList.add('isActive');
      console.log($startBtn.checked);
      progress();
    } else {
      state.state = 'Short Break';
      $pomodoro.classList.remove('isActive');
      $shortBreak.classList.add('isActive');
      console.log($startBtn.checked);
      progress();
    }
  } else if (state.state === 'Short Break') {
    state.state = 'Pomodoro';
    $pomodoro.classList.add('isActive');
    $shortBreak.classList.remove('isActive');
    console.log($startBtn.checked);
    progress();
  }
  state.curP = state.p;
  state.curS = state.s;
  state.curL = state.l;
  state.curPSec = 0;
  state.curSSec = 0;
  state.curLSec = 0;

  render();
};