

class Carousel {
    constructor() {
        this.cards = document.querySelectorAll('.testimonial-card');
        this.dotsContainer = document.querySelector('.carousel-dots');
        this.currentIndex = 0;
        this.interval = null;
        
        this.initDots();
        this.startAutoPlay();
        this.addEventListeners();
    }

    initDots() {
        this.cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }

    goToSlide(index) {
        this.cards[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');
        
        this.currentIndex = (index + this.cards.length) % this.cards.length;
        
        this.cards[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
    }

    startAutoPlay() {
        this.interval = setInterval(() => this.nextSlide(), 8000);
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }

    addEventListeners() {
        document.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());
        document.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
    }

    get dots() {
        return Array.from(this.dotsContainer.children);
    }
}

class ConsultationModal {
    constructor() {
        this.modal = document.querySelector('.consultation-modal');
        this.openButtons = document.querySelectorAll('.cta-button.pulse');
        this.closeButton = document.querySelector('.close-modal');
        
        this.addEventListeners();
    }

    addEventListeners() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', () => this.toggleModal(true));
        });
        
        this.closeButton.addEventListener('click', () => this.toggleModal(false));
        window.addEventListener('click', (e) => {
            if(e.target === this.modal) this.toggleModal(false);
        });
    }

    toggleModal(show) {
        this.modal.style.display = show ? 'block' : 'none';
        document.body.style.overflow = show ? 'hidden' : 'auto';
    }
}

class GreyHeart {
    constructor() {
        this.init();
    }

    init() {
        new Carousel();
        new ConsultationModal();
        // Initialize other components as needed
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => new GreyHeart());
