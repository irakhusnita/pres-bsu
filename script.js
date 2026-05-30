let current = 0;
const slides = document.querySelectorAll(".slide");
const bar = document.getElementById("bar");

// Tambah ilustrasi morph otomatis
const icons = [
  "♻️","🌱","🌍","🤝","✨","📋",
  "⚖️","💰","🧴","🚫","✅","🏆",
  "📚","💚","🌿"
];

slides.forEach((slide, i) => {
  if (!slide.querySelector(".visual")) {
    const visual = document.createElement("div");
    visual.className = "visual";
    visual.textContent = icons[i % icons.length];
    slide.appendChild(visual);
  }
});

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");

  if(bar){
    bar.style.width =
      ((i + 1) / slides.length * 100) + "%";
  }
}

function nextSlide(){
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide(){
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.addEventListener("keydown", e => {
  if(e.key === "ArrowRight" || e.key === " "){
    nextSlide();
  }

  if(e.key === "ArrowLeft"){
    prevSlide();
  }
});

let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    nextSlide();
  }

  if(endX - startX > 50){
    prevSlide();
  }
});

showSlide(current);

/* ===========================
   ANIMASI AKTIF
=========================== */

function clearPulse(){
  document.querySelectorAll(
    ".amanah,.kolab,.school,#a1,#k1,#t1,#i1,#f1"
  ).forEach(el=>{
    if(el){
      el.classList.remove("pulse");
    }
  });
}

function pulse(selector, letters){

  clearPulse();

  const target = document.querySelector(selector);

  if(target){
    target.classList.add("pulse");
  }

  letters.forEach(id=>{
    const el = document.getElementById(id);

    if(el){
      el.classList.add("pulse");
    }
  });

  setTimeout(()=>{
    if(target){
      target.classList.remove("pulse");
    }

    letters.forEach(id=>{
      const el = document.getElementById(id);

      if(el){
        el.classList.remove("pulse");
      }
    });

  },900);
}

function runAKTIFAnimation(){

  setTimeout(()=>{
    pulse(".amanah",["a1"]);
  },1000);

  setTimeout(()=>{
    pulse(".kolab",["k1","t1"]);
  },2800);

  setTimeout(()=>{
    pulse(".school",["i1","f1"]);
  },4600);
}

runAKTIFAnimation();

setInterval(runAKTIFAnimation,7000);