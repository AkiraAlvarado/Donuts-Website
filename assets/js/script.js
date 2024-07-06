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
      currentPosition -= (slideWidth + slideMargin); // Elimina una posición , para que el translateX , retroceda un poco
      // Ya que el translate no se actuailiza con cada click, sino que desde el principio desde el inicio del contenedor
      // Sigue calculadando, cuanto mover,se si al dar next se movio 800 , y al dar prev, se bajo 200 al currenposition,
      //Entonces quedaria en 600, siend asi que el translate es menor desde la posición inicial ,retrocediendo
      track.style.transform = `translateX(${-currentPosition}px)`;
      console.log(currentPosition)
    }
  });

  // Event listener para el botón de siguiente
  nextButton.addEventListener('click', function () {
    // Obtiene la posición , mediante la suma de la imagen y el margen , pero , solo si es menor que el ancho total
    if (currentPosition + slideWidth + slideMargin < trackWidth) {
      currentPosition += (slideWidth + slideMargin);
      track.style.transform = `translateX(${-currentPosition}px)`;
      console.log(currentPosition)
    }

    // Si es mayor que el ancho total , entonces regresa a a primera imagen
    if (currentPosition + slideWidth + slideMargin >= trackWidth) {
      currentPosition = 0;// Deshabilitar el botón
      track.style.transform = `translateX(${-currentPosition}px)`
      console.log(currentPosition)
      return
    }
  });
});
