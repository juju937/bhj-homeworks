const dropdownButton = document.querySelector('.dropdown__list');

dropdownButton.addEventListener("click", () => {
  dropdownButton.classList.add("dropdown__list_active");
});