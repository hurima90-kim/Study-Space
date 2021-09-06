const modalForm = document.querySelector('.modal-form');
const inputName = document.getElementById('name');
const inputUrl = document.getElementById('url');
const shortcut = document.querySelector('.short-cut-list');

function addShortCut(newShortCut) {
  const link = document.createElement('a');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  link.setAttribute('href', inputUrl.value);
  console.log(inputUrl.value);
  div.innerText = '📌';
  btn.innerText = '❌';

  shortcut.appendChild(link);
  link.appendChild(div);
  link.appendChild(p);
  shortcut.appendChild(btn);
  p.innerText = newShortCut;
}

function handleSubmit(event) {
  event.preventDefault();
  const newName = inputName.value;
  const newUrl = inputUrl.value;
  addShortCut(newName, newUrl);
  inputName.value = '';
  inputUrl.value = '';

  document.querySelector('.modal').classList.add('hidden');
}

modalForm.addEventListener('submit', handleSubmit);
