function createStars() {
    const stars = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        stars.appendChild(star);
    }
}

createStars();
function animateCards() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Inicializamos la animación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', animateCards);

// Efecto de parallax suave en las imágenes
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const img = card.querySelector('img');
        if (img) {
            const moveX = (x - rect.width/2) / 50;
            const moveY = (y - rect.height/2) / 50;
            
            img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        }
    });
});