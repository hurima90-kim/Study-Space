const open = () => {
  document.querySelector('.modal').classList.remove('hidden');
};

const close = () => {
  document.querySelector('.modal').classList.add('hidden');
};

document.querySelector('.openModal').addEventListener('click', open);
document.querySelector('.closeModal').addEventListener('click', close);
document.querySelector('.modal-bg').addEventListener('click', close);
