var typed = new Typed("#typing", {
  strings: ["Web Developer", "UI/UX Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


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
const cert = document.querySelector(".cert-section");

window.addEventListener("scroll", ()=>{
  const pos = cert.getBoundingClientRect().top;
  const screen = window.innerHeight / 1.2;

  if(pos < screen){
    cert.style.opacity = "1";
    cert.style.transform = "translateY(0)";
  }
});
