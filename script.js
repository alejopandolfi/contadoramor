// Fecha y hora de inicio de la relación (1am)
var startDate = new Date('2023-11-07T01:00:00'); // Cambia la fecha según sea necesario

// Función para calcular los meses, días y horas transcurridas
function calculateTimeElapsed() {
    var now = new Date();
    var monthsElapsed = now.getMonth() - startDate.getMonth() + (12 * (now.getFullYear() - startDate.getFullYear()));
    var startDateCopy = new Date(startDate); // Hacemos una copia de la fecha de inicio
    startDateCopy.setMonth(startDateCopy.getMonth() + monthsElapsed); // Avanzamos la fecha de inicio por el número de meses transcurridos
    var daysElapsed = Math.floor((now - startDateCopy) / (1000 * 60 * 60 * 24)); // Calculamos los días transcurridos después de los meses completos

    // Construimos el mensaje con los meses y días actualizados
    var message = "¡Ya pasamos " + monthsElapsed + " meses y " + daysElapsed + " días juntos! Te amo con todo mi corazón amor de mi vida ❤️";
    document.getElementById('message').innerText = message;
}

// Llamar a la función cada segundo para actualizar el contador
setInterval(function() {
    calculateTimeElapsed();
}, 1000);

// Calcular y mostrar el tiempo transcurrido al cargar la página
calculateTimeElapsed();



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
