function resetAnim(){
  document.querySelectorAll(".word, h1 b, .school").forEach(el=>{
    el.classList.remove("active-word","active-letter");
  });
}

function animateStep(wordClass, letters){
  resetAnim();

  if(wordClass === "school"){
    document.querySelector(".school").classList.add("active-word");
  }else{
    document.querySelector("." + wordClass).classList.add("active-word");
  }

  letters.forEach(id=>{
    document.getElementById(id).classList.add("active-letter");
  });
}

setTimeout(()=>animateStep("amanah",["a1"]),1000);
setTimeout(()=>animateStep("kolab",["k1","t1"]),2600);
setTimeout(()=>animateStep("school",["i1","f1"]),4200);
setTimeout(resetAnim,6000);
setInterval(()=>{
  setTimeout(()=>animateStep("amanah",["a1"]),0);
  setTimeout(()=>animateStep("kolab",["k1","t1"]),1600);
  setTimeout(()=>animateStep("school",["i1","f1"]),3200);
  setTimeout(resetAnim,4800);
},6500);