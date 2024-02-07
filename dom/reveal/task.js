const reveal = document.querySelectorAll('.reveal');

function revealElement () {
  reveal.forEach((el) => {
    const item = el.getBoundingClientRect();

    if (item.bottom > 0 && item.top < (window.innerHeight || document.documentElement.clientHeight)) {
      el.classList.add('reveal_active');
    } else {
    el.classList.remove('reveal_active');
    }
  })
}

document.addEventListener('scroll', revealElement)