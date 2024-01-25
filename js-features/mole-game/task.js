let molesDead = 0;
let molesMissed = 0;

let holes = document.querySelectorAll(".hole");
const field = Array.from(holes);

field.forEach((hole) => {

  hole.addEventListener("click", () => {

    if (hole.classList.contains('hole_has-mole')) {
      molesDead++;
      document.getElementById("dead").innerText = molesDead;
    } else {
      molesMissed++;
      document.getElementById("lost").innerText = molesMissed;
    }

    if (molesDead === 10 && molesMissed < 5) {
      alert('Вы победили!');
      document.getElementById("dead").innerText = 0;
      document.getElementById("lost").innerText = 0;
    } else if (molesMissed === 5) {
      alert('Вы проиграли!');
      document.getElementById("dead").innerText = 0;
      document.getElementById("lost").innerText = 0;
    }
  })
})