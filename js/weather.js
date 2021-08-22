const API_KEY = '0b6a5bd54188e99d0d93e50dcd8ed9ac';

function handleGeoSucces(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}

function handleGeoError() {
  console.log('Cant access GEO location');
}

navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
