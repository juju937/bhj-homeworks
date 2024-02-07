let fontSizeButtons = document.querySelectorAll('.font-size');
let book = document.getElementById('book');

fontSizeButtons.forEach((item) => {
  item.addEventListener('click', function(event) {
    event.preventDefault()
    let currentlySelectedSize = document.querySelector(".font-size.font-size_active");
      if (currentlySelectedSize) {
        currentlySelectedSize.classList.remove("font-size_active");
      }
    item.classList.add("font-size_active");
    
    if (item.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small')
    }

    if (item.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big')
    }
  })
})