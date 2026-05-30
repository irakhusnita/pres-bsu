let current = 0;
const slides = document.querySelectorAll(".slide");
const bar = document.getElementById("bar");

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  bar.style.width = ((i + 1) / slides.length * 100) + "%";
}

function nextSlide(){
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide(){
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.addEventListener("keydown", e=>{
  if(e.key === "ArrowRight" || e.key === " ") nextSlide();
  if(e.key === "ArrowLeft") prevSlide();
});

let startX = 0;
document.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
});
document.addEventListener("touchend", e=>{
  let endX = e.changedTouches[0].clientX;
  if(startX - endX > 50) nextSlide();
  if(endX - startX > 50) prevSlide();
});

showSlide(current);