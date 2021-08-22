const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreetings(text) {
  const hours = new Date().getHours();

  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  if (hours >= 6 && hours < 12) {
    greeting.textContent = `Good Morning ${text}`;
  } else if (hours >= 12 && hours < 16) {
    greeting.textContent = `Good Afternoon ${text}`;
  } else if (hours >= 18) {
    greeting.textContent = `Good Evening ${text}`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
