import state from './timerState';
import render from './render';

const $timerMenu = document.querySelector('.timer__menu');

export default () => {
  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    [...$timerMenu.children].forEach(v => {
      v.firstChild.classList.remove('isActive');
    });

    e.target.classList.add('isActive');

    state.state = e.target.textContent;
    state.curP = state.p;
    state.curS = state.s;
    state.curL = state.l;
    state.curPSec = 0;
    state.curPSec = 0;
    state.curPSec = 0;

    render();
  });
};

document.addEventListener('DOMContentLoaded', render());