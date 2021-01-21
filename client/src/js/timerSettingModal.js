import timerSetting from './timerSettingState';

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
    $settingModalBg.classList.add('is-active');
  });

  $settingModalBg.addEventListener('click', e => {
    if (!e.target.matches('.setting-modal *')) closeModal();
  });

  $closeBtn.addEventListener('click', () => {
    closeModal();
  });

  $okBtn.addEventListener('click', () => {
    timerSetting.pomodoroMin = +$pomodoro.value;
    timerSetting.shortBreakMin = +$shortBreak.value;
    timerSetting.longBreakMin = +$longBreak.value;
    // Do Something here

    closeModal();
  });
}