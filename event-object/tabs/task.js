let tabHeaders = Array.from(document.querySelectorAll('.tab'));


tabHeaders.forEach((tab) => {
tab.addEventListener("click", () => {
  tab.classList.add("tab_active");
  document.querySelector('.tab__content').classList.add("tab__content_active");
});
});