import state from './timer/timerState';
import render from './timer/render';

export default function timerSettingModal() {
  // DOM
  const $settingBtn = document.querySelector('.setting');
  const $settingModalBg = document.querySelector('.setting-modal-bg');
  const $pomodoro = document.getElementById('pomodoro');
  const $shortBreak = document.getElementById('shortBreak');
  const $longBreak = document.getElementById('longBreak');
  const $closeBtn = document.querySelector('.close-setting');
  const $okBtn = document.querySelector('.setting-modal__ok');

  const closeModal = () => {
    $settingModalBg.classList.remove('is-active');
  };

  $settingBtn.addEventListener('click', () => {
    state.p = +$pomodoro.value;
    state.s = +$shortBreak.value;
    state.l = +$longBreak.value;
    state.curP = +$pomodoro.value;
    state.curS = +$shortBreak.value;
    state.curL = +$longBreak.value;
    state.curPSec = 0;
    state.curSSec = 0;
    state.curLSec = 0;
    $settingModalBg.classList.add('is-active');
  });

  $settingModalBg.addEventListener('click', e => {
    if (!e.target.matches('.setting-modal *')) closeModal();
  });

  $closeBtn.addEventListener('click', () => {
    closeModal();
  });

  $okBtn.addEventListener('click', () => {
    state.p = +$pomodoro.value;
    state.s = +$shortBreak.value;
    state.l = +$longBreak.value;
    state.curP = +$pomodoro.value;
    state.curS = +$shortBreak.value;
    state.curL = +$longBreak.value;
    // Do Something here
    render();
    closeModal();
  });
}