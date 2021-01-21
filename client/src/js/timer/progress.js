const $bar = document.querySelector('.bar');
const $startBtn = document.querySelector('.timer__start');

export default () => {
  let i = 0;
  $startBtn.onclick = () => {
    // if (i === 0) {
    //   i = 1;
    //   let width = 10;
    //   const id = setInterval(frame, 10);
    //   const frame = () => {
    //     if (width >= 100) {
    //       clearInterval(id);
    //       i = 0;
    //     } else {
    //       width++;
    //       console.log(width);
    //       $bar.style.width = width + '%';
    //     }
    //   };
    // }
    if (i === 0) {
      i = 1;
      let width = 10;
      const id = setInterval(function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          $bar.style.width = width + '%';
        }
      }, 10);
    }
  };
};
