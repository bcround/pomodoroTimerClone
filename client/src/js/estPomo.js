import {state} from './main';

export default function upAndDown () {
  // DOM
  const $countUp = document.querySelector('.count__up');
  const $countDown = document.querySelector('.count__down');
  const $input = document.querySelector('.count__input-number');

  let input = +$input.value;

  $countUp.addEventListener('click', () => {
    $input.value = ++input;
    state.count = $input.value;
  });

  $countDown.addEventListener('click', () => {
    if (input < 1) return;
    $input.value = --input;
    state.count = $input.value;
  });
}

