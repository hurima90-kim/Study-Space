const modalForm = document.querySelector('.modal-form');
const inputName = document.getElementById('name');
const inputUrl = document.getElementById('url');
const shortcut = document.querySelector('.short-cut-list');

const SHORTCUT_KEY = 'ShortCut';
let shortcutArr = [];
let uniqueId =
  Date.now().toString(36) + Math.random().toString(36).substring(2);

function saveShortCut() {
  localStorage.setItem(SHORTCUT_KEY, JSON.stringify(shortcutArr));
}

function deleteShortCut(event) {
  const div = event.target.parentElement;
  div.remove();
  shortcutArr = shortcutArr.filter((item) => item.id !== parseInt(div.id));
  saveShortCut();
}

function addShortCut(newShortCut) {
  const div = document.createElement('div');
  const link = document.createElement('a');
  const span = document.createElement('span');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const button = document.createElement('button');
  div.id = newShortCut.id;
  const favicon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${newShortCut.Url}`;

  link.setAttribute('href', newShortCut.Url);
  img.setAttribute('src', favicon);
  button.innerText = '❌';
  button.addEventListener('click', deleteShortCut);

  shortcut.appendChild(div);
  div.appendChild(link);
  link.appendChild(span);
  span.appendChild(img);
  link.appendChild(p);
  p.innerText = newShortCut.Name;
  div.appendChild(button);
}

function handleSubmit(event) {
  event.preventDefault();
  const newShort = {
    id: uniqueId,
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
