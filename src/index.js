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
