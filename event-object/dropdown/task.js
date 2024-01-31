let dropdownButton = document.querySelector('.dropdown__value');

dropdownButton.addEventListener("click", () => {
  document.querySelector('.dropdown__list').classList.add("dropdown__list_active");
});

let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownItem.forEach((item) => {
item.addEventListener("click", () => {
  document.querySelectorAll('.dropdown__link').preventDefault();
  document.querySelector('.dropdown__list').classList.remove("dropdown__list_active");
  this.closest('.dropdown__value').children[0].textContent = this.textContent;
})
})