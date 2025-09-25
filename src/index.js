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

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement = addEventListener("submit", searchCity);
