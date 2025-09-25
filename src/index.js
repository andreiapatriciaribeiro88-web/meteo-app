let darkModeBtn = document.querySelector("#dark-mode");

function darkMode() {
  let darkModeBtn = document.querySelector("#dark-mode");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️"; // sun emoji
  } else {
    darkModeBtn.textContent = "🌙"; // moon emoji
  }
}

darkModeBtn.addEventListener("click", darkMode);

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "a9taa49fcab393c9d77od70f76b07b85";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchCityButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCityButton);

searchCity("Porto");
