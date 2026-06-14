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

function openGmailApp(event) {
  event.preventDefault();

  const email = "correadamian882@gmail.com";
  const gmailAndroidIntent = `intent://mail.google.com/mail/?to=${encodeURIComponent(email)}#Intent;scheme=https;package=com.google.android.gm;end`;
  const gmailIos = `googlegmail://co?to=${encodeURIComponent(email)}`;
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.google.android.gm";
  const appStoreUrl = "https://apps.apple.com/app/gmail-email-by-google/id422689480";
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const fallbackUrl = isAndroid ? playStoreUrl : isIOS ? appStoreUrl : `mailto:${email}`;

  if (isAndroid) {
    window.location.href = gmailAndroidIntent;
  } else if (isIOS) {
    window.location.href = gmailIos;
  } else {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    return;
  }

  setTimeout(() => {
    window.location.href = fallbackUrl;
  }, 1200);
}

const gmailLink = document.getElementById("gmail-link");
if (gmailLink) {
  gmailLink.addEventListener("click", openGmailApp);
}
