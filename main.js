const search = document.getElementById("cityname");

search.addEventListener("keyup", getWeather);

async function getWeather() {
  const city = search.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b31fc51d965595f7ad494ff430bf91f&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.getElementById("output").innerHTML = `
  <h1 class='name'>${data.name}, ${data.sys.country}</h1><br>
  <h2 class='current'>Currently: ${data.main.temp}°C</h2><br>
  <h2>${data.weather[0].main} - ${data.weather[0].description}</h2><br>
  <h3>Feels like: ${data.main.feels_like}°C</h3><br>
  <h3>Today's minimum: ${data.main.temp_min}°C <br> Today's maximum: ${data.main.temp_max}°C</h3><br>
  <h3>Humidity: ${data.main.humidity} % <br> Pressure: ${data.main.pressure} hPa</h3><br>
  <h3>Wind Speed: ${data.wind.speed} m/s <br> Cloud Cover: ${data.clouds.all} %</h3><br>
  `;
}

getWeather();
