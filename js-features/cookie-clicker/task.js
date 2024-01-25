let clicks = 0;
let clickerCounter = document.getElementById("clicker__counter");

clickerCounter.addEventListener("click", () => {
  clicks++;
  clickerCounter.innerText = clicks;
  });