let dropdownButton = document.querySelector('.dropdown__value');

dropdownButton.addEventListener("click", () => {
  document.querySelector('.dropdown__list').classList.toggle("dropdown__list_active");
});