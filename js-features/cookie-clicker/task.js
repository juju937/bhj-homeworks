let clicks = 0;
let cookie = document.getElementById("cookie");

cookie.addEventListener("click", () => {
  clicks++;
  document.getElementById("clicker__counter").innerText = clicks;
  cookie.width.toggle('250');
  });