// Scroll animado: aparece contenido al hacer scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Navbar cambia color al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#333";
  } else {
    navbar.style.backgroundColor = "#4c4cff";
  }
});
const langBtn = document.getElementById("lang-btn");
let lang = "es";

const traducciones = {
  // Encabezados y secciones
  "Mi Portafolio": "My Portfolio",
  "Sobre mí": "About me",
  "Soy un estudiante de programación apasionado por la tecnología y el desarrollo web.": 
    "I am a programming student passionate about technology and web development.",
  "Proyectos": "Projects",
  "Próximamente subiré algunos de mis trabajos destacados.": 
    "Soon I will upload some of my featured projects.",
  "Formación": "Education",
  "Contacto": "Contact",
  "Podés encontrarme en Instagram:": "You can find me on Instagram:",

  // Formación
  "Secundario completo": "High school diploma",
  "Instituto General Manuel Belgrano": "General Manuel Belgrano Institute",
  "Técnico en Programación": "Programming Technician",
  "Universidad Tecnológica Nacional - Facultad Regional Villa María": 
    "National Technological University - Villa María Regional Faculty",

  // Footer
  "© 2025 Damián Correa": "© 2025 Damián Correa"
};

langBtn.addEventListener("click", () => {
  const elements = document.querySelectorAll("h1, h2, p, a, span, button");
  
  elements.forEach(el => {
    const text = el.innerText.trim();
    if (lang === "es" && traducciones[text]) {
      el.innerText = traducciones[text];
    } else if (lang === "en") {
      // Buscar el texto original en español
      const original = Object.keys(traducciones).find(key => traducciones[key] === text);
      if (original) el.innerText = original;
    }
  });

  lang = lang === "es" ? "en" : "es";
  langBtn.textContent = lang === "es" ? "EN 🇬🇧" : "ES 🇪🇸";
});
