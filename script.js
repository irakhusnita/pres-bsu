function glow(selector, ids){
  document.querySelectorAll(".glow").forEach(el => el.classList.remove("glow"));

  const target = document.querySelector(selector);
  if(target) target.classList.add("glow");

  ids.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.classList.add("glow");
  });
}

setInterval(()=>{
  glow(".amanah", ["a1"]);
  setTimeout(()=>glow(".kolab", ["k1","t1"]), 1800);
  setTimeout(()=>glow(".school", ["i1","f1"]), 3600);
}, 5600);