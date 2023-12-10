'use strict';

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', changeName);

function changeName(event) {
  const username = event.currentTarget.value.trim();

  username.length ? (span.textContent = username) : (span.textContent = 'Anonymous');
}
