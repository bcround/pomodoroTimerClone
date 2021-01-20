export default () => {
  const $timerMenu = document.querySelector('.timer__menu');

  $timerMenu.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    [...$timerMenu.children].forEach(v => {
      v.firstChild.classList.remove('isActive');
    });

    e.target.classList.add('isActive');
  });
};