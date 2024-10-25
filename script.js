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
        scrub: 1,
        pin: true,
        markers: false,
        
      }
    })
    .to("#text1", { opacity: 1, duration: 1, onStart: () => document.getElementById("text1").textContent = escolherFrase("text1") })
    .to("#text1", { opacity: 0, duration: 1 })
    .to("#text2", { opacity: 1, duration: 1, onStart: () => document.getElementById("text2").textContent = escolherFrase("text2") })
    .to("#text2", { opacity: 0, duration: 1 })
    .to("#text3", { opacity: 1, duration: 1, onStart: () => document.getElementById("text3").textContent = escolherFrase("text3") })
    .to("#text3", { opacity: 0, duration: 1 })
    .to("#text4", { opacity: 1, duration: 1, onStart: () => document.getElementById("text4").textContent = escolherFrase("text4") });
});

const frases = {
  text1: ["arte", "criação", "crítica"],
  text2: ["traz", "possui", "carrega"],
  text3: ["muito", "intenso", "profundo"],
  text4: ["desconforto", "questionamento", "desafio"]
};


function escolherFrase(partId) {
  const frasesPart = frases[partId];
  return frasesPart[Math.floor(Math.random() * frasesPart.length)];
}
