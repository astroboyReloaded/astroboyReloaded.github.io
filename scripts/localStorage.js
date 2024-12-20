// localStorage
import {
  isNameValid,
  isEmailValid,
  isMessageValid,
} from './form-validation.js';

const nameLS = document.getElementById('name');
const emailLS = document.getElementById('email');
const msgLS = document.getElementById('msg');
const inputs = Array.from(document.getElementsByClassName('formInput'));

inputs.forEach((input) => input.addEventListener('input', () => {
  localStorage.setItem(
    'formData',
    JSON.stringify({
      name: nameLS.value,
      email: emailLS.value,
      message: msgLS.value,
    }),
  );
}));

const parsedLS = JSON.parse(localStorage.formData || '{}');

window.onload = () => {
  nameLS.value = parsedLS.name || '';
  emailLS.value = parsedLS.email || '';
  msgLS.value = parsedLS.message || '';
  if (nameLS.value || emailLS.value || msgLS.value) {
    isNameValid(nameLS.value);
    isEmailValid(emailLS.value);
    isMessageValid(msgLS.value);
  }
};
