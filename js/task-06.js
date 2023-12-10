'use stict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector('#controls input');

const createBtn = document.querySelector('#controls button[data-create]');

const destroyBtn = document.querySelector('#controls button[data-destroy]');

const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  boxContainer.innerHTML = null;
  const amount = Number.parseInt(inputValue.value);
  if (amount >= 1 && amount <= 100) {
    const divArray = [];
    for (let i = 0; i < amount; i++) {
      divArray.push(`<div></div>`);
    }
    const boxes = divArray.join('');
    boxContainer.insertAdjacentHTML('afterbegin', boxes);
  }

  function stylesAdding() {
    const childrenBoxes = document.querySelectorAll('#boxes div');
    childrenBoxes.forEach((el, i) => {
      el.style.backgroundColor = getRandomHexColor();
      el.style.borderRadius = `4px`;
      el.style.boxShadow = `#2e2f42 0px 0px 3px 0px`;
      el.style.width = `${30 + 10 * i}px`;
      el.style.height = `${30 + 10 * i}px`;
      el.style.backgroundImage = `linear-gradient(
	to bottom, 
	rgba(0, 0, 0, 0.1), 
	rgba(255, 255, 255, 0.3)
	)`;
    });
  }
  stylesAdding();
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContainer.textContent = null;
  inputValue.value = null;
}
