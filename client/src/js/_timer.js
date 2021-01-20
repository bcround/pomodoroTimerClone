export default () => {
  const $timer = document.querySelector('.timer');
  $timer.innerHTML = `
    <h2 class="timer__heading a11y-hidden">Timer</h2>
    <ul class="timer__menu">
      <li class="timer__item"><button class="timer__btn isActive">Pomodoro</button></li>
      <li class="timer__item"><button class="timer__btn">Short Break</button></li>
      <li class="timer__item"><button class="timer__btn">Long Break</button></li>
    </ul>
    <p class="timer__countdown">25:00</p>
    <input class="timer__start" id="timerStart" type="checkbox">
    <label for="timerStart">START</label>
  `;

  
};