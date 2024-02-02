let dropdownButton = document.querySelector('.dropdown__value');
let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownButton.addEventListener("click", () => {
  document.querySelector('.dropdown__list').classList.add("dropdown__list_active");
});

dropdownItem.forEach((item) => {
item.addEventListener("click", function(event) {
  event.preventDefault()
  document.querySelector('.dropdown__value').textContent = item.textContent;
  document.querySelector('.dropdown__list').classList.remove("dropdown__list_active");
})
})