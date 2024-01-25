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
  });
});