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

// dodatečný element pro opacity
const InnerElm = () => {
  return '<div class="inner"></div>';
};

// přiřazení elementů do gridu
const btnElm = document.querySelector('#grid');
btnElm.innerHTML = InnerElm() + BtnGrid();

// výchozí tah hraje kolečko
let player = 'circle';

const playerTurn = () => {
  const playerElm = document.querySelector('#player');
  playerElm.innerHTML = SvgElm(player);
};

//tvroba svg elementu pro zobrazení střídání hráčů
const SvgElm = (player) => {
  return `<img class="image__svg" src="./images/${player}.svg"/>`;
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
          playerTurn();
        } else {
          player = 'cross';
          playerTurn();
        }
        button.setAttribute('disabled', true);
      }
    });
  }
};
play();
