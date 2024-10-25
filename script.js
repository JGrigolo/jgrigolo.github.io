console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      }
    })
    .to("img", {
      scale: 6,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
      
    })
    .to(
      ".section.hero",
      {
        scale: 5,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      
    );
    gsap
    .timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "+=1",
        end: "+=100%",
        scrub: 3,
        pin: true,
        markers: false,
        
      }
    })
    .to("#text1", { opacity: 1, duration: 1, onStart: () => document.getElementById("text1").textContent = chooseWords("text1") })
    .to("#text1", { opacity: 0, duration: 1 })
    .to("#text2", { opacity: 1, duration: 1, onStart: () => document.getElementById("text2").textContent = chooseWords("text2") })
    .to("#text2", { opacity: 0, duration: 1 })
    .to("#text3", { opacity: 1, duration: 1, onStart: () => document.getElementById("text3").textContent = chooseWords("text3") })
    .to("#text3", { opacity: 0, duration: 2 })
});

const words = {
  text1: ["arte"],
  text2: ["é", "significa", "precisa", "assume", "reinvidica", "exige", "defende", "clama", "contesta",  "deseja", "disputa", "almeja", "contempla", "observa", "preve", "representa", "implica"],
  text3: ["desconforto", "questionar", "resignificar", "reconstruir", "destruir", "significado", "inquietude", "recriar", "criar", "reorganizar", "reparar", "reconstituir", "instituir"],
};


function chooseWords(partId) {
  const wordPart = words[partId];
  return wordPart[Math.floor(Math.random() * wordPart.length)];
}
