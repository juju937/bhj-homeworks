let rotator = document.querySelectorAll('.rotator__case');

rotator.forEach((element, index) => {
  setInterval(()=>{
  const currentlyActive = document.querySelector(".rotator__case.rotator__case_active");
  if (currentlyActive) {
    currentlyActive.classList.remove('rotator__case_active');
  }
  element.classList.add('rotator__case_active');
  document.querySelector('.rotator>.rotator__case_active').classList.remove('rotator__case_active');
  document.querySelector(`.rotator>:nth-child(${index + 1})`).classList.add('rotator__case_active');
  }, index * 1000);
})