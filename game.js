const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const congratsMessage = document.getElementById('congratsMessage');

// Configuración del juego
const gridSize = 3; // Tamaño de la cuadrícula (3x3)
let cellSize; // Calculado dinámicamente
const numbers = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1);
const shuffledNumbers = shuffleArray(numbers); // Revolver los números
let currentNumber = 1; // El número actual a conectar
let path = []; // Almacena las conexiones realizadas

// Colores y estilos
const colors = {
    fondo: '#1a1a2e',
    circulo: '#3498db',
    circuloCompletado: '#2ecc71',
    texto: '#ffffff',
    linea: '#f1c40f',
    estrella: '#f1c40f'
};

// Función para revolver un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Ajustar el tamaño del canvas según la pantalla
function resizeCanvas() {
  const width = window.innerWidth * 0.9;
  const height = window.innerHeight * 0.7;
  const size = Math.min(width, height);
  canvas.width = size;
  canvas.height = size;
  cellSize = canvas.width / gridSize;
  drawGrid();
}

// Dibujar la cuadrícula con números
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar fondo estrellado
    drawStarBackground();

  shuffledNumbers.forEach((num, index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const x = col * cellSize + cellSize / 2;
    const y = row * cellSize + cellSize / 2;

    // Dibujar círculo
    ctx.beginPath();
    ctx.arc(x, y, cellSize * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = num < currentNumber ? colors.circuloCompletado : colors.circulo;
    ctx.fill();
        ctx.strokeStyle = colors.estrella;
        ctx.lineWidth = 3;
    ctx.stroke();

    // Escribir el número
        ctx.fillStyle = colors.texto;
        ctx.font = `bold ${cellSize * 0.3}px Comic Sans MS`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num, x, y);
  });

  // Dibujar las líneas de conexión
  if (path.length > 1) {
    ctx.beginPath();
        ctx.strokeStyle = colors.linea;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();
  }
}

// Dibujar fondo estrellado
function drawStarBackground() {
    ctx.fillStyle = colors.fondo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar estrellas
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = colors.estrella;
        ctx.fill();
    }
}

// Obtener la posición del número en la cuadrícula
function getNumberPosition(num) {
  const index = shuffledNumbers.indexOf(num);
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  return {
    x: col * cellSize + cellSize / 2,
    y: row * cellSize + cellSize / 2
  };
}

// Efecto de explosión de estrellas
function createStarExplosion(x, y) {
    const particles = [];
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            size: Math.random() * 3 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = colors.estrella;
            ctx.fill();
        });

        if (particles.some(p => p.x > 0 && p.x < canvas.width && p.y > 0 && p.y < canvas.height)) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Manejar clics en el canvas
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Encontrar el número más cercano al clic
  let closestNumber = null;
  let minDistance = Infinity;
  shuffledNumbers.forEach((num) => {
    const pos = getNumberPosition(num);
    const distance = Math.sqrt(
      Math.pow(pos.x - mouseX, 2) + Math.pow(pos.y - mouseY, 2)
    );
    if (distance < minDistance && distance < cellSize * 0.25) {
      minDistance = distance;
      closestNumber = num;
    }
  });

  // Verificar si el número es el siguiente en la secuencia
  if (closestNumber === currentNumber) {
        const pos = getNumberPosition(closestNumber);
        path.push(pos);
    currentNumber++;
        
        // Crear efecto de explosión
        createStarExplosion(pos.x, pos.y);

    // Si se completó el juego
    if (currentNumber > numbers.length) {
      congratsMessage.style.display = 'block';
            // Agregar confeti
            createConfetti();
    }
  }

  // Redibujar la cuadrícula
  drawGrid();
});

// Efecto de confeti
function createConfetti() {
    const confetti = [];
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 5 + 2
        });
    }

    function animate() {
        confetti.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        if (confetti.some(p => p.y < canvas.height)) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Mezclar los números
    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNumbers[i], shuffledNumbers[j]] = [shuffledNumbers[j], shuffledNumbers[i]];
    }
    currentNumber = 1;
    path = [];
    congratsMessage.style.display = 'none';
    drawGrid();
}

// Evento para el botón 'Jugar de nuevo'
document.getElementById('playAgainBtn').addEventListener('click', reiniciarJuego);

// Ajustar el canvas al cargar o redimensionar la ventana
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 