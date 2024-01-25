let seconds = 59;

setInterval(function() {
  seconds -= 1;
    if(seconds == 0){
      clearInterval(seconds);
      alert('Вы победили в конкурсе!');
    }
    document.getElementById("timer").innerText = seconds;
}, 1000);