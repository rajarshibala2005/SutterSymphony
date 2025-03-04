(() => {
    const slides = document.querySelectorAll('.slide');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideDuration = 8000;
    let autoplayTimer;

    const updateSlide = (index) => {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === index);
        });
    };

    const goToNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide(currentIndex);
    };

    // Autoplay
    const startAutoplay = () => {
        autoplayTimer = setInterval(goToNextSlide, slideDuration);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayTimer);
    };

    updateSlide(currentIndex);
    startAutoplay();

    // Pause autoplay when tab is inactive
    document.addEventListener('visibilitychange', () => {
        document.hidden ? stopAutoplay() : startAutoplay();
    });

})();
