let seconds = 59;

let timer = setInterval(function() {
  seconds -= 1;
    if(seconds === 0){
      alert('Вы победили в конкурсе!');
      clearInterval(timer);
    }
    document.getElementById("timer").innerText = seconds;
}, 1000);