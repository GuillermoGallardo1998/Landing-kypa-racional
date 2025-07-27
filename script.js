// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('navbar-hamburger');
const navLinks = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.navbar-links a');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
    hamburger.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Evita scroll
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
}

// ===== SLIDER DE TESTIMONIOS =====
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".main-testimony-track");
  const slides = document.querySelectorAll(".main-testimony-comment");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let index = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const faqOptions = document.querySelectorAll(".main-faq-option");

  faqOptions.forEach(option => {
    const header = option.querySelector(".faq-header");
    const text = option.querySelector("p");
    const toggle = option.querySelector(".toggle");

    header.addEventListener("click", () => {
      const isOpen = option.classList.contains("open");

      // Cerrar todas (modo acordeón)
      faqOptions.forEach(opt => {
        const p = opt.querySelector("p");
        p.style.maxHeight = null;
        opt.classList.remove("open");
        opt.querySelector(".toggle").textContent = "+";
      });

      if (!isOpen) {
        option.classList.add("open");

        // 🔥 Esperamos al siguiente frame para calcular altura real
        requestAnimationFrame(() => {
          text.style.maxHeight = text.scrollHeight + "px";
        });

        toggle.textContent = "-";
      }
    });
  });
});

