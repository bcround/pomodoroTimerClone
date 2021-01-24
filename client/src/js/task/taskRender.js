import base from './taskState';

let timeOut;

export default function render() {
  // DOM
  const $todoList = document.querySelector('.todolist__list');
  const $summeryCont = document.querySelector('.summary');
  const $actCount = document.querySelector('.actCount');
  const $estCount = document.querySelector('.estCount');
  const $finishTime = document.querySelector('.finishTime');
  const $todosBrief = document.querySelector('.todos__brief');
  const $todosWorkingOn = document.querySelector('.todos__working-on');

  let html = '';
  if (base.tasks.length === 0) {
    $todosBrief.classList.add('is-active');
    $todosWorkingOn.classList.remove('is-active');
  }

  base.tasks.forEach(({
    id, content, active, completed, pomodoro, actPomodoro, noteActive, note
  }) => {
    html += `<li class="list__item ${active ? 'is-active' : ''}" id=${id}>
    <input class="list__checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <span class="list__title" style="text-decoration: ${completed ? 'line-through' : 'none'}">
      ${content}
    </span>
    <span class="list__repeat">${actPomodoro}/${pomodoro}</span>
    <button class="list__btn fas fa-minus"></button>
    <p class="list__note ${noteActive ? 'is-active' : ''}">${note}</p>
  </li>`;
  });

  $todoList.innerHTML = html;

  if (base.tasks.length) {
    const est = base.tasks.reduce((acc, cur) => {
      if (!cur.completed) {
        return acc + (+cur.pomodoro);
      }
      return acc;
    }, 0);

    const act = base.tasks.reduce((acc, cur) => acc + cur.actPomodoro, 0);
    const setFinishTime = () => {
      let hour = new Date().getHours();
      let min = new Date().getMinutes();

      const user = base.tasks[0];
      const shortBreakCount = Math.floor(est / 5);
      const longBreakCount = Math.max(Math.floor(est / 4));

      const all = (user.pomodoroMin * est)
                  + (user.shortBreakMin * est - shortBreakCount)
                  + user.longBreakMin * longBreakCount;

      min += all;
      hour += Math.floor(min / 60);

      if (min >= 60) {
        min -= 60 * Math.floor(min / 60);
        min = (min < 10) ? '0' + min : min;
      }

      $finishTime.textContent = `${hour}:${min}`;
    };
    setFinishTime();
    if (timeOut) clearInterval(timeOut);
    timeOut = setInterval(setFinishTime, 60000);

    $summeryCont.classList.add('is-active');
    $estCount.textContent = est;
    $actCount.textContent = act;
  } else if (!base.tasks.length) {
    $summeryCont.classList.remove('is-active');
  }
}
