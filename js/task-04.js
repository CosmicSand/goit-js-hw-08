'use strict';

const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', register);

function register(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const first = form.elements.email.getAttribute('type');
  const second = form.elements.password.getAttribute('type');
  const result = {};

  if (!login.length || !password.length) {
    return alert('All form fields must be filled in');
  }

  result[first] = login;
  result[second] = password;
  console.table(result);

  event.target.reset();
}
