const modalForm = document.querySelector('.modal-form');
const inputName = document.getElementById('name');
const inputUrl = document.getElementById('url');
const shortcut = document.querySelector('.short-cut-list');

const SHORTCUT_KEY = 'ShortCut';
let shortcutArr = [];

function saveShortCut() {
  localStorage.setItem(SHORTCUT_KEY, JSON.stringify(shortcutArr));
}

function deleteShortCut(event) {
  const link = event.target.parentElement;
  link.remove();
  console.log(event.target.parentElement);
}

function addShortCut(newShortCut) {
  const div = document.createElement('div');
  const link = document.createElement('a');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');

  link.setAttribute('href', inputUrl.value);
  span.innerText = '📌';
  button.innerText = '❌';
  button.addEventListener('click', deleteShortCut);

  shortcut.appendChild(div);
  div.appendChild(link);
  link.appendChild(span);
  link.appendChild(p);
  p.innerText = newShortCut.Name;
  div.appendChild(button);
}

function handleSubmit(event) {
  event.preventDefault();
  const newShort = {
    Name: inputName.value,
    Url: inputUrl.value,
  };
  addShortCut(newShort);
  inputName.value = '';
  inputUrl.value = '';
  shortcutArr.push(newShort);
  saveShortCut();

  document.querySelector('.modal').classList.add('hidden');
}

modalForm.addEventListener('submit', handleSubmit);

const saveShort = localStorage.getItem(SHORTCUT_KEY);
if (saveShort !== null) {
  const parsedShortCut = JSON.parse(saveShort);
  shortcutArr = parsedShortCut;
  parsedShortCut.forEach(addShortCut);
}
