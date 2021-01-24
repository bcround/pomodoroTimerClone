import state from './timerState';

const $bar = document.querySelector('.bar');
const $startBtn = document.querySelector('.timer__start');
$bar.style.width = '0';
const $settingBtn = document.querySelector('.setting');

let id = 0;
let progress = 0;
let standard = 100;

export default () => {
  if (state.state === 'Pomodoro') {
    standard = state.p * 60;
  } else if (state.state === 'Short Break') {
    standard = state.l * 60;
  } else if (state.state === 'Long Break') {
    standard = state.s * 60;
  }
  const width = standard / 1000;

  if ($startBtn.checked) {
    id = setInterval(() => {
      if (progress >= standard) {
        $bar.style.width = '0';
        progress = 0;
        clearInterval(id);
      } else {
        progress += width;
        $bar.style.width = `${(progress / standard) * 100}%`;
      }
    }, (standard / 1000) * 1000);
  } else {
    clearInterval(id);
  }

  $settingBtn.addEventListener('click', () => {
    $startBtn.checked = false;
    progress = 0;
    $bar.style.width = '0';
    clearInterval(id);
  });

  const $timerMenu = document.querySelector('.timer__menu');

  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    progress = 0;
    $bar.style.width = '0';
    clearInterval(id);
  });
};
