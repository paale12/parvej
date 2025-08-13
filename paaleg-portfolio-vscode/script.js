// Utility: Typing animation
const roles = [
  "Front-End Developer",
  "JavaScript Enthusiast",
  "Node.js & API Builder",
  "React Learner",
  "Problem Solver"
];
let i = 0, j = 0, deleting = false;
const typeEl = document.getElementById("type");

function typeLoop(){
  const current = roles[i % roles.length];
  if(!deleting){
    typeEl.textContent = current.slice(0, ++j);
    if(j === current.length){ deleting = true; setTimeout(typeLoop, 1200); return; }
  }else{
    typeEl.textContent = current.slice(0, --j);
    if(j === 0){ deleting = false; i++; }
  }
  setTimeout(typeLoop, deleting ? 40 : 90);
}
typeLoop();

// Mobile nav
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", ()=> nav.classList.toggle("show"));

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      if(entry.target.classList.contains("skill-card")){
        const span = entry.target.querySelector(".bar span");
        const value = entry.target.querySelector(".bar").dataset.value;
        requestAnimationFrame(()=> span.style.width = value + "%");
      }
    }
  });
},{ threshold:.2 });

document.querySelectorAll(".reveal-up, .skill-card").forEach(el=> observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth anchor scrolling (optional improvement on native)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if(href.length > 1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth", block: "start" });
      nav.classList.remove("show");
    }
  });
});
