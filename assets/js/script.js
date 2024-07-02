
document.addEventListener('DOMContentLoaded', () => {

  const verMenu = (menu, toggle) => {
    const navBar = document.getElementById(menu);
    const toggleButton = document.getElementById(toggle)
    if (toggleButton && navBar) {
      toggleButton.addEventListener('click', () => {
        navBar.classList.toggle('show');
      });
    }
  }

  verMenu('menu', 'toggle');

});
// const buttonPrev = document.getElementById("prev-slide");
// const buttonNext = document.getElementById("next-slide");
// const slide = document.querySelector(".galeria-container__image__list");
// const imagen = document.getElementById("image");

// const imageSize = 325; // Tamaño de cada imagen en píxeles
// const paddingSize = 20; // Tamaño del padding entre imágenes en píxeles

// let currentPosition = 0; // Posición actual del slider

// buttonPrev.addEventListener('click', () => {
//   currentPosition += imageSize + paddingSize; // Mover al siguiente slide
//   if (currentPosition > 0) {
//     currentPosition = -(imageSize + paddingSize) * (10 - 1); // Volver al primer slide al final
//   }
//   slide.style.left = `${currentPosition}px`;
// });

// buttonNext.addEventListener('click', () => {
//   currentPosition -= imageSize + paddingSize; // Move to previous slide
//   if (currentPosition <= -(imageSize + paddingSize) * (10 - 1)) {
//     currentPosition = 0; // Move back to the first slide at the end
//   }
//   slide.style.left = `${currentPosition}px`;
// });




document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.getElementById('button-prev');
  const nextButton = document.getElementById('button-next');
  const track = document.querySelector('.galeria-container__image__list');
  const slides = document.querySelectorAll('.galeria-container__image');
  const slideWidth = slides[0].offsetWidth - 10;
  const slideMargin = 10; // Margen entre slides
  const totalSlides = slides.length;
  const trackWidth = totalSlides * (slideWidth + slideMargin); // Ancho total del track

  let currentPosition = 0;

  // Event listener para el botón de previo
  prevButton.addEventListener('click', function () {
    if (currentPosition > 0) {
      currentPosition -= (slideWidth + slideMargin);
      track.style.transform = `translateX(${-currentPosition}px)`;
      console.log(currentPosition)
    } if (currentPosition + slideWidth + slideMargin < trackWidth) {
      nextButton.disabled = false; // habilitar el boton
      console.log(`ancho actual ${currentPosition + slideWidth + slideMargin}`)
      console.log(`ancho total ${trackWidth}`)
    }
  });

  // Event listener para el botón de siguiente
  nextButton.addEventListener('click', function () {
    if (currentPosition + slideWidth + slideMargin < trackWidth) {
      currentPosition += (slideWidth + slideMargin);
      track.style.transform = `translateX(${-currentPosition}px)`;
    }
    // Deshabilitar el botón siguiente si se llega al final
    if (currentPosition + slideWidth + slideMargin >= trackWidth) {
      nextButton.disabled = true; // Deshabilitar el botón
    }
  });
});
