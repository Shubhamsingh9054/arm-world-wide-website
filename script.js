let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
let flag = 0;
document.getElementById('mn').addEventListener('click', function(){

var box = document.getElementById('drop-top');

if (flag == 0) {
    box.style.top = '0%'
    box.style.transition = "1s"
    flag = 1;
    
}
else if (flag == 1) {
    box.style.top = '-110%'
    box.style.transition = "1s"
    flag = 0;
}
});