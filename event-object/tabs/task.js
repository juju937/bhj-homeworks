let tabHeaders = Array.from(document.querySelectorAll('.tab'));


tabHeaders.forEach((tab, index) => {
tab.addEventListener("click", () => {
  
  document.querySelector('.tab__contents>.tab__content_active').classList.remove('tab__content_active');
  document.querySelector(`.tab__contents>:nth-child(${index + 1})`).classList.add('tab__content_active');
});
});
