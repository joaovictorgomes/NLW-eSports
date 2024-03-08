document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.list li');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');

    let currentSlide = 0;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('on');
            if (index === currentSlide) {
                slide.classList.add('on');
            }
        });
    }

    function nextSlider() {
        currentSlide = (currentSlide + 1) % slides.length; 
        updateSlider();
    }

    function prevSlider() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
        updateSlider();
    }

    btnNext.addEventListener('click', nextSlider);
    btnPrev.addEventListener('click', prevSlider);

    // Initialize
    updateSlider();
});

 function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);

    if (modal) {
      modal.style.display = "block";
      modal.addEventListener('click', (e) => {
        if (e.target.id == modalID || e.target.className == 'fechar') {
          modal.style.display = "none";
        }
      });
    }
  }

  const img = document.querySelector('.imagem');

  img.addEventListener('click', function () {
    iniciaModal('modalanuncio');
  });

  var modalAnuncio = document.getElementById("modalanuncio");
  var btnAnuncio = document.getElementById("publiqueAnuncioBtn");
  var spanAnuncio = document.getElementsByClassName("cancelar")[0];

  btnAnuncio.onclick = function () {
    iniciaModal('modalanuncio');
  }

  spanAnuncio.onclick = function () {
    modalAnuncio.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modalAnuncio) {
      modalAnuncio.style.display = "none";
    }
  }