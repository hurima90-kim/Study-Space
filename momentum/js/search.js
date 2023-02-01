let keyword = document.querySelector('.keyword');
let searchBtn = document.querySelector('.search-button');

searchBtn.onclick = function () {
  let url = 'https://www.google.com/search?q=' + keyword.value;
  window.open(url);
};
