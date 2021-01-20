const $timerHeading = document.createElement('h1');
const $timerMenu = document.createElement('ul');

$timerHeading.classList.add('timer__heading', 'a11y-hidden');
$timerMenu.classList.add('timer__menu');

const $template = document.createElement('template');
$template.innerHTML = ``
$template.content.cloneNode(true)