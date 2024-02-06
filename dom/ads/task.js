function rotateAds() {

  let rotator = Array.from(document.querySelectorAll('.rotator__case'));
  let index = 0;

  setInterval(() => {
    let currentlyActive = document.querySelector('.rotator__case.rotator__case_active');

    if (rotator.indexOf(currentlyActive) === rotator.length-1) {
      index = 0;
    } else {
      index++;
    }

    currentlyActive.classList.remove('rotator__case_active');
    rotator[index].classList.add('rotator__case_active');
  }, 1000);
}

rotateAds()