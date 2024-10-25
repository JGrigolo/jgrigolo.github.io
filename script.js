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
  text2: ["é", "significa", "precisa", "assume", "reinvidica", "exige", "defende", "clama", "contesta",
          "deseja", "disputa", "almeja", "contempla", "observa", "preve", "representa", "implica", "aceita",
          "acusa", "acredita", "afirma", "analisa", "apresenta", "aproveita", "argumenta", "articula", "associa",
          "avalia", "baseia", "celebra", "comenta", "compete", "compreende", "concede", "confirma", "constrói",
          "contesta", "convida", "decide", "declara", "dedica", "defende", "desafia", "descreve", "desenvolve",
          "distingue", "divulga", "emana", "enfatiza", "encoraja", "esclarece", "espera", "estabelece", "estima",
          "estuda", "explora", "expressa", "funda", "garante", "ilustra", "impacta", "importa", "impulsiona", "influencia",
          "informa", "insiste", "intenciona", "interpretar", "invoca", "justifica", "lança", "manifesta", "medita",
          "mobiliza", "molda", "motiva", "observa", "oferece", "opina", "orienta", "persiste", "plena", "pode", "postula",
          "precisa", "provoca", "reafirma", "reflete", "registra", "relata", "repete", "reponde", "requer", "respira",
          "ressalta", "revela", "sustenta", "tece", "testemunha", "toma", "traduz", "transforma", "une", "usa", "valida",
          "valoriza", "verifica", "vigia", "vislumbra", "vivencia", "vota", "zela", "anuncia", "articula", "estipula",
          "descreve", "compila"],
  text3: ["desconforto", "questionar", "resignificar", "reconstruir", "destruir", "significado", "inquietude", "recriar",
          "criar", "reorganizar", "reparar", "reconstituir", "instituir", "adaptar", "alterar", "analisar", "articular",
          "assegurar", "assumir", "atualizar", "compreender", "contemplar", "definir", "designar", "determinar", "devolver",
          "dividir", "efetuar", "evidenciar", "experimentar", "explorar", "facilitar", "fomentar", "formar", "fundar", "gerar",
          "implementer", "iniciar", "instaurar", "integrar", "interagir", "interpretar", "intervir", "inverter", "justificar",
          "manter", "modificar", "mobilizar", "motivar", "narrar", "negociar", "observar", "ocasionar", "organizar", "otimizar",
          "parar", "planear", "proporcionar", "propor", "quebrar", "reagir", "realizar", "reavaliar", "reconhecer", "regenerar",
          "relatar", "remediar", "remover", "renovar", "reorganizar", "reparar", "representar", "resgatar", "resistir", "rever",
          "reverter", "revisar", "sistematizar", "transformar", "unificar", "variar", "visualizar", "avaliar", "complicar",
          "consolidar", "contrabalançar", "construir", "demarcar", "desafiar", "deslocar", "enfrentar", "esclarecer", "especificar",
          "fomentar", "iluminar", "inspecionar", "instigar", "prolongar", "substituir", "sustentar", "tornar", "tensionar", "validar",
          "vincular", "votar", "zelar", "debater", "delinear", "explicar", "iniciar", "precisar", "progredir", "submeter", "valorizar",
          "verificar", "vigiar", "vigorar", "analisar", "elevar", "mobilizar", "organizar", "compartilhar", "inspirar", "mediar", "obrigar"],
};


function chooseWords(partId) {
  const wordPart = words[partId];
  return wordPart[Math.floor(Math.random() * wordPart.length)];
}
