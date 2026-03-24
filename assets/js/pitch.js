/** Pitch: navegação por teclado, clique e swipe. */
(function () {
    'use strict';

    const slides = document.querySelectorAll('.slide');
    const total = slides.length;
    let current = 0;

    const slideCounter = document.getElementById('slideCounter');
    const progressBar = document.getElementById('progressBar');

    function goTo(idx) {
        if (idx < 0 || idx >= total) return;
        slides[current].classList.remove('active');
        current = idx;
        slides[current].classList.add('active');
        if (slideCounter) {
            slideCounter.textContent =
                String(current + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
        }
        if (progressBar) {
            progressBar.style.width = ((current + 1) / total) * 100 + '%';
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            goTo(current + 1);
        }
        if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
            e.preventDefault();
            goTo(current - 1);
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target.closest('a, button')) return;
        const x = e.clientX;
        if (x > window.innerWidth * 0.5) goTo(current + 1);
        else goTo(current - 1);
    });

    let touchStartX = 0;
    document.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });
    document.addEventListener('touchend', function (e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? goTo(current + 1) : goTo(current - 1);
        }
    });
})();
