'use strict';

//tvorba hrací plochy
const BtnGrid = () => {
  let elem = '';
  let i = 0;
  while (i < 100) {
    elem += '<button class="grid-item"></button>';
    i++;
  }
  return elem;
};

const InnerElm = () => {
  return '<div class="inner"></div>';
};

const btnElm = document.querySelector('#grid');
btnElm.innerHTML = InnerElm() + BtnGrid();

//kdo je na tahu
let player = 'circle';

const SvgElm = () => {
  return `<img class="image__svg" src="./images/${player}.svg"/>`;
};

const round = () => {
  const playerElm = document.querySelector('#player');
  playerElm.innerHTML = SvgElm();
};

// hra
const play = () => {
  const buttons = document.querySelectorAll('.grid-item');
  for (let j = 0; j < buttons.length; j++) {
    const button = buttons[j];
    button.addEventListener('click', () => {
      if (button.classList !== `board__field--${player}`) {
        button.classList.add(`board__field--${player}`);
        if (player === 'cross') {
          player = 'circle';
          round();
        } else {
          player = 'cross';
          round();
        }
        button.setAttribute('disabled', true);
      }
    });
  }
};
play();
