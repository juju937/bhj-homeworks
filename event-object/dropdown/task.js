let dropdownButton = document.querySelector('.dropdown__list');

dropdownButton.addEventListener("click", () => {
  dropdownButton.classList.toggle("dropdown__list_active");
});