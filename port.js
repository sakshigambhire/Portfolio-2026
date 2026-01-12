const words = ["Coder", "UI/UX Designer", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
  let current = words[wordIndex];

  if (!isDeleting) {
    typing.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typing.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  }

  if (charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(()=>{},1000);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, 120);
}

typeEffect();
const about = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
  const pos = about.getBoundingClientRect().top;
  const screen = window.innerHeight / 1.2;

  if(pos < screen){
    about.style.opacity = "1";
    about.style.transform = "translateY(0)";
  }
});
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", ()=>{
  projectCards.forEach((card,index)=>{
    const pos = card.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;

    if(pos < screen){
      setTimeout(()=>{
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 150);   // delay each card
    }
  });
});
const skillBoxes = document.querySelectorAll(".skill-box");

window.addEventListener("scroll", ()=>{
  skillBoxes.forEach(box=>{
    const pos = box.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;

    if(pos < screen){
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});
const resume = document.querySelector(".resume-section");

window.addEventListener("scroll", ()=>{
  const pos = resume.getBoundingClientRect().top;
  const screen = window.innerHeight / 1.2;

  if(pos < screen){
    resume.style.opacity = "1";
    resume.style.transform = "translateY(0)";
  }
});
const contact = document.querySelector(".contact-section");

window.addEventListener("scroll", ()=>{
  const pos = contact.getBoundingClientRect().top;
  const screen = window.innerHeight / 1.2;

  if(pos < screen){
    contact.style.opacity = "1";
    contact.style.transform = "translateY(0)";
  }
});
