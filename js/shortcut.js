const modalForm = document.querySelector('.modal-form');
const inputName = document.getElementById('name');
const inputUrl = document.getElementById('url');
const shortcut = document.querySelector('.short-cut-list');

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
  p.innerText = newShortCut;
  div.appendChild(button);
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
