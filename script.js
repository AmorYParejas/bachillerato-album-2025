 const carousel = document.getElementById('carousel');
    const indicators = document.querySelectorAll('.indicator');

    function updateIndicators() {
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = window.innerWidth;
      const index = Math.round(scrollLeft / slideWidth);

      indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    carousel.addEventListener('scroll', () => {
      requestAnimationFrame(updateIndicators);
    });

    // Clics en puntos
    indicators.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        carousel.scrollTo({
          left: i * window.innerWidth,
          behavior: 'smooth'
        });
      });
    });

    // Inicial
    updateIndicators();

    // MODAL LOGIC
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Añadir evento a todas las imágenes
document.querySelectorAll(".slide img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalText.textContent = img.alt; // O puedes personalizar esto
    modal.style.display = "flex";
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
