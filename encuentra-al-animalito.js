// Base de datos de animales
const animales = [
    { nombre: 'perro', imagen: 'img/animales/perro.png' },
    { nombre: 'gato', imagen: 'img/animales/gato.png' },
    { nombre: 'conejo', imagen: 'img/animales/conejo.png' },
    { nombre: 'elefante', imagen: 'img/animales/elefante.png' },
    { nombre: 'leon', imagen: 'img/animales/leon.png' },
    { nombre: 'tigre', imagen: 'img/animales/tigre.png' },
    { nombre: 'jirafa', imagen: 'img/animales/jirafa.png' },
    { nombre: 'mono', imagen: 'img/animales/mono.png' },
    { nombre: 'panda', imagen: 'img/animales/panda.png' },
    { nombre: 'zebra', imagen: 'img/animales/zebra.png' },
    { nombre: 'hipopotamo', imagen: 'img/animales/hipopotamo.png' },
    { nombre: 'rinoceronte', imagen: 'img/animales/rinoceronte.png' },
    { nombre: 'cocodrilo', imagen: 'img/animales/cocodrilo.png' },
    { nombre: 'pinguino', imagen: 'img/animales/pinguino.png' },
    { nombre: 'koala', imagen: 'img/animales/koala.png' },
    { nombre: 'canguro', imagen: 'img/animales/canguro.png' },
    { nombre: 'oso', imagen: 'img/animales/oso.png' },
    { nombre: 'lobo', imagen: 'img/animales/lobo.png' },
    { nombre: 'zorro', imagen: 'img/animales/zorro.png' },
    { nombre: 'ardilla', imagen: 'img/animales/ardilla.png' },
    { nombre: 'tortuga', imagen: 'img/animales/tortuga.png' },
    { nombre: 'serpiente', imagen: 'img/animales/serpiente.png' },
    { nombre: 'rana', imagen: 'img/animales/rana.png' },
    { nombre: 'pajaro', imagen: 'img/animales/pajaro.png' },
    { nombre: 'aguila', imagen: 'img/animales/aguila.png' },
    { nombre: 'buho', imagen: 'img/animales/buho.png' },
    { nombre: 'delfin', imagen: 'img/animales/delfin.png' },
    { nombre: 'ballena', imagen: 'img/animales/ballena.png' },
    { nombre: 'tiburon', imagen: 'img/animales/tiburon.png' },
    { nombre: 'pulpo', imagen: 'img/animales/pulpo.png' }
];

// Elementos del DOM
const contenedorAnimales = document.querySelector('.contenedor-animales');
const pregunta = document.getElementById('pregunta');
const mensajeFelicidades = document.getElementById('mensaje-felicidades');
const mensajeError = document.getElementById('mensaje-error');
const botonJugarNuevamente = document.getElementById('jugar-nuevamente');

let animalCorrecto;
let animalesMostrados = [];

// Configuración de voz
const synth = window.speechSynthesis;
let utterance;

// Función para hablar el texto
function hablar(texto) {
    if (synth.speaking) {
        synth.cancel();
    }
    utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9; // Velocidad un poco más lenta para niños
    synth.speak(utterance);
}

// Función para mezclar un array (Fisher-Yates shuffle)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para seleccionar 3 animales aleatorios
function seleccionarAnimales() {
    const animalesMezclados = mezclarArray([...animales]);
    return animalesMezclados.slice(0, 3);
}

// Función para actualizar la interfaz con los animales seleccionados
function actualizarAnimales() {
    animalesMostrados = seleccionarAnimales();
    animalCorrecto = animalesMostrados[Math.floor(Math.random() * 3)];
    
    const preguntaTexto = `¿Dónde está el ${animalCorrecto.nombre}?`;
    pregunta.textContent = preguntaTexto;
    
    // Primero hablamos la pregunta
    hablar(preguntaTexto);
    
    // Luego, después de un pequeño retraso, mostramos los animales
    setTimeout(() => {
        contenedorAnimales.innerHTML = '';
        animalesMostrados.forEach(animal => {
            const divAnimal = document.createElement('div');
            divAnimal.className = 'animal';
            divAnimal.dataset.animal = animal.nombre;
            
            const img = document.createElement('img');
            img.src = animal.imagen;
            img.alt = animal.nombre;
            
            divAnimal.appendChild(img);
            contenedorAnimales.appendChild(divAnimal);
        });
    }, 1000); // Esperamos 1 segundo antes de mostrar los animales
}

// Función para mostrar mensaje de felicitación
function mostrarFelicidades() {
    mensajeFelicidades.style.display = 'block';
    mensajeError.style.display = 'none';
    
    // Efecto de confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    hablar("¡Felicidades! ¡Lo encontraste!");
}

// Función para mostrar mensaje de error
function mostrarError() {
    mensajeError.style.display = 'block';
    hablar("¡Ups! Intenta de nuevo");
    setTimeout(() => {
        mensajeError.style.display = 'none';
    }, 1000);
}

// Event Listeners
contenedorAnimales.addEventListener('click', (e) => {
    const animalSeleccionado = e.target.closest('.animal');
    if (!animalSeleccionado) return;

    if (animalSeleccionado.dataset.animal === animalCorrecto.nombre) {
        mostrarFelicidades();
    } else {
        mostrarError();
    }
});

botonJugarNuevamente.addEventListener('click', () => {
    mensajeFelicidades.style.display = 'none';
    actualizarAnimales();
});

// Hablar las instrucciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    hablar("¡Escucha atentamente y haz clic en el animal que se te pide encontrar!");
    // Esperamos a que termine de hablar las instrucciones antes de mostrar la primera pregunta
    setTimeout(() => {
        actualizarAnimales();
    }, 2000); // Esperamos 2 segundos para dar tiempo a que se escuchen las instrucciones
}); 