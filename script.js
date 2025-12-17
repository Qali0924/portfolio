function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
    function changeLanguage() {
    // Przekierowanie na wersję angielską strony
    window.location.href = "index-en.html";
}
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if(index === currentIndex) item.classList.add('active');
    });
}

function nextSlide() {
    currentIndex++;
    if(currentIndex >= items.length) currentIndex = 0;
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    if(currentIndex < 0) currentIndex = items.length - 1;
    updateCarousel();
}
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.textContent = `SKOPIOWANO: ${text}`;
        notification.classList.add('show');

        // Powiadomienie znika po 2 sekundach
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Błąd kopiowania:', err);
    });
}
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.textContent = `COPIED: ${text}`;
        notification.classList.add('show');

        // Powiadomienie znika po 2 sekundach
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Copy error:', err);
    });
}

// Dodaj to do swojego script.js
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // zablokuj domyślne przewijanie
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
function changeLanguage() {
    if (window.location.href.includes("index-en.html")) {
        // Jesteśmy na angielskiej stronie → wróć do polskiej
        window.location.href = "index.html";
    } else {
        // Jesteśmy na polskiej stronie → przełącz na angielską
        window.location.href = "index-en.html";
    }
}
function changeLanguage() {
    // Dodajemy klasę fade-out
    document.body.classList.add('fade-out');

    // Po 500ms (czas trwania fade-out) przełączamy stronę
    setTimeout(() => {
        if (window.location.href.includes("index-en.html")) {
            window.location.href = "index.html";
        } else {
            window.location.href = "index-en.html";
        }
    }, 500);
}

// Aby fade-in zadziałało przy załadowaniu nowej strony
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});
