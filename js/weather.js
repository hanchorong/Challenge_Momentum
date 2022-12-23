const WEATHER_API = config.API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather .city");
      const weatherIcon = document.querySelector(
        "#weather div span:first-child"
      );
      const img = document.createElement("img");
      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.appendChild(img);
      const temp = document.querySelector("#weather div span:last-child");
      city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
      temp.innerText = `${Math.ceil(data.main.temp)} °C`;
      // console.log(data);
    });
}

function onGeoError() {
  alert("Can't find GeoLocation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
