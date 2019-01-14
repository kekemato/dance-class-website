let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n );
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".carousel__slide");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// let stopIv = setInterval( () => plusSlides(1), 3000)
// document.querySelector('.header__carousel').addEventListener("mouseover", function () {
//     clearInterval(stopIv)
// })

// document.querySelector('.header__carousel').addEventListener("mouseout", function () {
//     stopIv = setInterval(() => plusSlides(1), 3000)
// })

document.querySelector('.next').addEventListener('click', () => plusSlides(1))
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1))

document.querySelector('.dot-1').addEventListener('click', () => currentSlide(1))
document.querySelector('.dot-2').addEventListener('click', () => currentSlide(2))
document.querySelector('.dot-3').addEventListener('click', () => currentSlide(3))


showSlides(slideIndex);