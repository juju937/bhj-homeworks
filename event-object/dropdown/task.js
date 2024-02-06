let dropdownButton = document.getElementsByClassName('.dropdown__value');
let dropdownItem = document.getElementsByClassName('.dropdown__item');

dropdownButton.forEach((button) => {
button.addEventListener("click", () => {
  document.getElementsByClassName('.dropdown__list').classList.add("dropdown__list_active");
});
})

dropdownItem.forEach((item) => {
item.addEventListener("click", function(event) {
  event.preventDefault()
  document.closest('.dropdown__value').textContent = item.textContent;
  document.closest('.dropdown__list').classList.remove("dropdown__list_active");
})
})