import state from './timerState';
import render from './render';
import progress from './progress';
import taskState from '../task/taskState'

const $pomodoro = document.querySelector('.timer__btn:first-child');
const $shortBreak = document.querySelector('.timer__item:nth-child(2) > button');
const $longBreak = document.querySelector('.timer__item:nth-child(3) > button');

export default () => {
  if (!taskState.tasks.length) {
    if (state.state === 'Pomodoro') {
      if (state.repeat === state.curRepeat) {
        state.state = 'Long Break';
        $pomodoro.classList.remove('isActive');
        $longBreak.classList.add('isActive');
        progress();
      } else {
        state.state = 'Short Break';
        $pomodoro.classList.remove('isActive');
        $shortBreak.classList.add('isActive');
        progress();
      }
    } else if (state.state === 'Short Break') {
      state.state = 'Pomodoro';
      $pomodoro.classList.add('isActive');
      $shortBreak.classList.remove('isActive');
      progress();
    }
  } else {
    const task = taskState.tasks.filter(v => v.active);
    if (state.state === 'Pomodoro') {
      if (+task[0].pomodoro === task[0].actPomodoro) {
        state.state = 'Long Break';
        $pomodoro.classList.remove('isActive');
        $longBreak.classList.add('isActive');
        progress();
      } else {
        state.state = 'Short Break';
        $pomodoro.classList.remove('isActive');
        $shortBreak.classList.add('isActive');
        progress();
      }
    } else if (state.state === 'Short Break') {
      state.state = 'Pomodoro';
      $pomodoro.classList.add('isActive');
      $shortBreak.classList.remove('isActive');
      progress();
    }
  }

  state.curP = state.p;
  state.curS = state.s;
  state.curL = state.l;
  state.curPSec = 0;
  state.curSSec = 0;
  state.curLSec = 0;

  render();
};