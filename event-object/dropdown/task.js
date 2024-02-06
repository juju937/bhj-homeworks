let dropdownButton = document.querySelectorAll('.dropdown__value');
let dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownButton.addEventListener("click", () => {
  document.querySelectorAll('.dropdown__list').classList.add("dropdown__list_active");
});

dropdownItem.forEach((item) => {
item.addEventListener("click", function(event) {
  event.preventDefault()
  document.closest('.dropdown__value').textContent = item.textContent;
  document.closest('.dropdown__list').classList.remove("dropdown__list_active");
})
})