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
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
  objData.message = refs.textarea.value;
  objData.email = refs.email.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
  console.log(objData);
}

function setDataOnLocalStorage() {
  if (savedData) {
    refs.textarea.value = savedData.message;
    refs.email.value = savedData.email;
  }
}

// const throttle = require('lodash.throttle');

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   email: document.querySelector('.feedback-form input'),
//   btnSubmit: document.querySelector('.feedback-form button'),
// };
// const STORAGE_KEY = 'feedback-form-state';
// const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// const objData = {};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onInput, 500));
// refs.email.addEventListener('input', throttle(onInput, 500));

// setDataOnLocalStorage();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onInput(evt) {
//   objData.message = refs.textarea.value;
//   objData.email = refs.email.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
//   console.log(typeof objData.message);
// }

// function setDataOnLocalStorage() {
//   if (savedData) {
//     refs.textarea.value = savedData.message;
//     refs.email.value = savedData.email;
//   }
// }
