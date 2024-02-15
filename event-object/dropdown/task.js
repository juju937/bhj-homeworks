const dropdownValues = document.querySelectorAll('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownValues.forEach((dropdownValue) => {
  dropdownValue.addEventListener('click', function() {
    const dropdown = this.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
  });
});

dropdownItem.forEach((item) => {
  item.addEventListener("click", function(event) {
    event.preventDefault()
    const dropdown = this.closest('.dropdown');
    dropdown.querySelector('.dropdown__value').textContent = item.textContent;
    item.closest('.dropdown__list').classList.remove("dropdown__list_active");
  })
  })

document.addEventListener('click', function(event) {
  const isOutsideDropdown = !event.target.closest('.dropdown');
  if (isOutsideDropdown) {
    const dropdownLists = document.querySelectorAll('.dropdown__list');
    dropdownLists.forEach(function(dropdownList) {
      dropdownList.classList.remove('dropdown__list_active');
    });
  }
});