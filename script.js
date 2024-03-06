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
