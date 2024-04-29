// Fecha de inicio de la relación
var startDate = new Date('2023-11-07'); // Fecha hace 5 meses y 22 días

// Función para calcular los días transcurridos
function calculateDays() {
    var now = new Date();
    var difference = now.getTime() - startDate.getTime();
    var daysElapsed = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('counter').innerText = daysElapsed + " días juntos";
}

// Llamar a la función cada segundo para actualizar el contador
setInterval(calculateDays, 1000);

// Limitar la cantidad de corazones creados por segundo
var maxHeartsPerSecond = 6; // Establece el número máximo de corazones por segundo

var container = document.getElementById('container');
var heartCount = 0;

function createHeart() {
    if (heartCount < maxHeartsPerSecond) {
        var heart = document.createElement('div');
        heart.classList.add('heart');
        // Generamos una posición aleatoria tanto en el lado izquierdo como en el derecho
        var x = Math.random() * (container.offsetWidth - 20); // Restamos 20 para que los corazones no se salgan del contenedor
        heart.style.left = x + 'px';
        container.appendChild(heart);
        heartCount++;
        heart.addEventListener('animationend', function() {
            container.removeChild(heart);
            heartCount--;
        });
    }
}

// Crear nuevos corazones cada 0.5 segundos
setInterval(createHeart, 500);

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;
const intervalTime = 3500; // Tiempo en milisegundos entre cada cambio de imagen

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * carousel.offsetWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, intervalTime);
