let clicks = 0;
let cookie = document.getElementById("cookie");

cookie.addEventListener("click", () => {
  clicks++;
  document.getElementById("clicker__counter").innerText = clicks;
  changeCookieSize();
  });

function changeCookieSize() {
  if (cookie.width = 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;;
  }
}