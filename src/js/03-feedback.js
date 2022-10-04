const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const objData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

setDataOnLocalStorage();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(savedData);

  if (refs.email.value === '' || refs.textarea.value === '') {
    return alert('Потрібно заповнити всі поля!');
  } else {
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onInput(evt) {
  objData.message = refs.textarea.value;
  objData.email = refs.email.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}

function setDataOnLocalStorage() {
  if (savedData) {
    refs.textarea.value = savedData.message;
    refs.email.value = savedData.email;
  }
}
