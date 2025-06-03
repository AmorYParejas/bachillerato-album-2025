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