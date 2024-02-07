let fontSizeButtons = document.querySelectorAll('.font-size');
let book = document.getElementById('book');

fontSizeButtons.forEach((item) => {
  item.addEventListener('click', () => {
    let currentlySelectedSize = document.querySelector(".font-size.font-size_active");
      if (currentlySelectedSize) {
        currentlySelectedSize.classList.remove("font-size_active");
      }
    item.classList.add("font-size_active");
    
    if (item.dataset.size === 'small') {
      book.classList.add('book_fs-small');
    } 
    if (item.dataset.size === 'big') {
      book.classList.add('book_fs-big');
    }
  })
})