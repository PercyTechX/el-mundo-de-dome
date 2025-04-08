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

  shuffledNumbers.forEach((num, index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const x = col * cellSize + cellSize / 2;
    const y = row * cellSize + cellSize / 2;

    // Dibujar círculo
    ctx.beginPath();
    ctx.arc(x, y, cellSize * 0.2, 0, Math.PI * 2);
    ctx.fillStyle = num < currentNumber ? '#28a745' : '#fff';
    ctx.fill();
    ctx.stroke();

    // Escribir el número
    ctx.fillStyle = '#000';
    ctx.font = `${cellSize * 0.3}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num, x, y);
  });

  // Dibujar las líneas de conexión
  if (path.length > 1) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();
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
    path.push(getNumberPosition(closestNumber));
    currentNumber++;

    // Si se completó el juego
    if (currentNumber > numbers.length) {
      congratsMessage.style.display = 'block';
    }
  }

  // Redibujar la cuadrícula
  drawGrid();
});

// Ajustar el canvas al cargar o redimensionar la ventana
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 