let dropdownButton = document.querySelectorAll('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownButton.forEach((element) => {
element.addEventListener("click", () => {
  dropdownList.classList.add("dropdown__list_active");
});
})

dropdownItem.forEach((item) => {
item.addEventListener("click", function(event) {
  event.preventDefault()
  dropdownList.closest('.dropdown').querySelector('.dropdown__value').textContent = item.textContent;
  item.closest('.dropdown__list').classList.remove("dropdown__list_active");
})
})