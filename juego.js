// Array de preguntas con opciones tanto en español como en inglés
const questions = [
  {
    es: { question: "¿Dónde está el gato?", correct: "gato" },
    en: { question: "Where is the cat?", correct: "cat" },
    options: [
      { name_es: "gato", name_en: "cat", img: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" },
      { name_es: "perro", name_en: "dog", img: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg" },
      { name_es: "elefante", name_en: "elephant", img: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg" }
    ]
  },
  {
    es: { question: "¿Dónde está el número 1?", correct: "1" },
    en: { question: "Where is number 1?", correct: "1" },
    options: [
      { name_es: "2", name_en: "2", img: "https://cdn.pixabay.com/photo/2013/07/12/17/00/number-2-151842_640.png" },
      { name_es: "1", name_en: "1", img: "https://cdn.pixabay.com/photo/2013/07/12/17/00/number-1-151841_640.png" },
      { name_es: "3", name_en: "3", img: "https://cdn.pixabay.com/photo/2013/07/12/17/00/number-3-151843_640.png" }
    ]
  },
  {
    es: { question: "¿Dónde está la manzana?", correct: "manzana" },
    en: { question: "Where is the apple?", correct: "apple" },
    options: [
      { name_es: "manzana", name_en: "apple", img: "https://cdn.pixabay.com/photo/2016/02/23/17/42/apple-1218166_640.jpg" },
      { name_es: "plátano", name_en: "banana", img: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_640.jpg" },
      { name_es: "uva", name_en: "grape", img: "https://cdn.pixabay.com/photo/2018/10/30/22/53/grapes-3784476_640.jpg" }
    ]
  },
  {
    es: { question: "¿Dónde está el león?", correct: "león" },
    en: { question: "Where is the lion?", correct: "lion" },
    options: [
      { name_es: "cebra", name_en: "zebra", img: "https://cdn.pixabay.com/photo/2020/01/31/07/26/zebra-4807227_640.jpg" },
      { name_es: "león", name_en: "lion", img: "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_640.jpg" },
      { name_es: "jirafa", name_en: "giraffe", img: "https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005_640.jpg" }
    ]
  },
  {
    es: { question: "¿Dónde está la flor?", correct: "flor" },
    en: { question: "Where is the flower?", correct: "flower" },
    options: [
      { name_es: "árbol", name_en: "tree", img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" },
      { name_es: "flor", name_en: "flower", img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" },
      { name_es: "arbusto", name_en: "bush", img: "https://cdn.pixabay.com/photo/2019/04/07/16/55/plant-4110207_640.jpg" }
    ]
  },
  {
    es: { question: "¿Dónde está el círculo?", correct: "círculo" },
    en: { question: "Where is the circle?", correct: "circle" },
    options: [
      { name_es: "triángulo", name_en: "triangle", img: "https://cdn.pixabay.com/photo/2013/07/12/14/07/triangle-147754_640.png" },
      { name_es: "cuadrado", name_en: "square", img: "https://cdn.pixabay.com/photo/2012/04/24/16/57/square-40378_640.png" },
      { name_es: "círculo", name_en: "circle", img: "https://cdn.pixabay.com/photo/2012/04/11/17/44/circle-29056_640.png" }
    ]
  },
  {
    es: { question: "¿Dónde está el coche?", correct: "coche" },
    en: { question: "Where is the car?", correct: "car" },
    options: [
      { name_es: "coche", name_en: "car", img: "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_640.jpg" },
      { name_es: "bicicleta", name_en: "bicycle", img: "https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_640.jpg" },
      { name_es: "avión", name_en: "airplane", img: "https://cdn.pixabay.com/photo/2016/11/18/13/22/airplane-1834289_640.jpg" }
    ]
  },
  {
    es: { question: "¿Dónde está el sol?", correct: "sol" },
    en: { question: "Where is the sun?", correct: "sun" },
    options: [
      { name_es: "luna", name_en: "moon", img: "https://cdn.pixabay.com/photo/2016/08/18/11/00/moon-1602728_640.png" },
      { name_es: "sol", name_en: "sun", img: "https://cdn.pixabay.com/photo/2013/07/13/10/51/sun-157126_640.png" },
      { name_es: "estrella", name_en: "star", img: "https://cdn.pixabay.com/photo/2014/04/02/10/24/star-303862_640.png" }
    ]
  },
  {
    es: { question: "¿Dónde está el libro?", correct: "libro" },
    en: { question: "Where is the book?", correct: "book" },
    options: [
      { name_es: "lápiz", name_en: "pencil", img: "https://cdn.pixabay.com/photo/2013/07/13/10/51/pencil-157466_640.png" },
      { name_es: "libro", name_en: "book", img: "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.png" },
      { name_es: "cuaderno", name_en: "notebook", img: "https://cdn.pixabay.com/photo/2017/08/02/01/01/notepad-2569605_640.jpg" }
    ]
  },
  {
    es: { question: "¿Dónde está la casa?", correct: "casa" },
    en: { question: "Where is the house?", correct: "house" },
    options: [
      { name_es: "casa", name_en: "house", img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg" },
      { name_es: "edificio", name_en: "building", img: "https://cdn.pixabay.com/photo/2016/07/11/18/03/sky-scraper-1510256_640.jpg" },
      { name_es: "parque", name_en: "park", img: "https://cdn.pixabay.com/photo/2016/11/22/19/17/bench-1850053_640.jpg" }
    ]
  }
];

// Estado del juego
let currentLang = 'es';
let usedQuestions = [];
let currentScore = 0;
let totalQuestions = 0;

// Cache de audio para mejorar rendimiento
const audioCache = {
  correct: new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3'),
  wrong: new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3'),
  win: new Audio('https://www.soundjay.com/misc/sounds/applause-01.mp3')
};

/**
 * Utiliza la API de síntesis de voz para leer el texto
 * @param {string} text - Texto a leer
 */
function speak(text) {
  // Cancelar cualquier lectura anterior
  window.speechSynthesis.cancel();
  
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = currentLang === 'es' ? 'es-ES' : 'en-US';
  msg.rate = 0.9; // Velocidad ligeramente más lenta para mejor comprensión
  window.speechSynthesis.speak(msg);
}

/**
 * Mezcla aleatoriamente un array
 * @param {Array} array - Array a mezclar
 * @return {Array} - Array mezclado
 */
function shuffle(array) {
  // Crear una copia para no modificar el original
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Muestra una pregunta al usuario
 */
function showQuestion() {
  // Verificar si se han usado todas las preguntas
  if (usedQuestions.length === questions.length) {
    showGameOver();
    return;
  }

  // Seleccionar una pregunta no usada aleatoriamente
  let availableQuestions = questions.filter((_, index) => !usedQuestions.includes(index));
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const questionIndex = questions.indexOf(availableQuestions[randomIndex]);
  usedQuestions.push(questionIndex);
  
  const question = questions[questionIndex];
  const content = question[currentLang];
  totalQuestions++;

  // Actualizar la interfaz
  document.getElementById("reward").style.display = "none";
  document.getElementById("question").innerText = content.question;
  document.getElementById("progress").innerText = 
    currentLang === 'es' 
      ? `Pregunta ${usedQuestions.length} de ${questions.length}` 
      : `Question ${usedQuestions.length} of ${questions.length}`;
  document.getElementById("score").innerText = 
    currentLang === 'es'
      ? `Puntuación: ${currentScore}`
      : `Score: ${currentScore}`;

  // Crear y mostrar las opciones
  const options = shuffle([...question.options]);
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  options.forEach(opt => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option-container";
    
    const img = document.createElement("img");
    img.src = opt.img;
    img.alt = currentLang === 'es' ? opt.name_es : opt.name_en;
    img.className = "option";
    img.loading = "lazy"; // Carga perezosa para mejorar rendimiento
    
    // Precargar imagen
    const preloadImg = new Image();
    preloadImg.src = opt.img;
    
    // Manejar errores de carga de imagen
    img.onerror = () => {
      img.src = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_640.png"; // Imagen de fallback
      console.error(`Error al cargar la imagen: ${opt.img}`);
    };
    
    // Usar el nombre en el idioma actual
    const optionName = currentLang === 'es' ? opt.name_es : opt.name_en;
    
    // Añadir el nombre debajo de la imagen
    const label = document.createElement("div");
    label.className = "option-label";
    label.innerText = optionName;
    
    // ID para identificar la opción
    optionDiv.dataset.optionId = optionName;
    
    // Gestionar el clic en la opción
    optionDiv.onclick = () => handleOptionClick(optionName, content.correct);
    
    // Añadir elementos al DOM
    optionDiv.appendChild(img);
    optionDiv.appendChild(label);
    container.appendChild(optionDiv);
  });

  // Leer la pregunta en voz alta
  speak(content.question);
}

/**
 * Maneja el clic en una opción
 * @param {string} selectedOption - Opción seleccionada
 * @param {string} correct - Respuesta correcta
 */
function handleOptionClick(selectedOption, correct) {
  // Evitar múltiples clics mientras se procesa la respuesta
  const optionsContainer = document.getElementById("optionsContainer");
  const options = optionsContainer.querySelectorAll(".option-container");
  options.forEach(opt => opt.style.pointerEvents = "none");
  
  const feedback = document.getElementById("feedback");
  
  if (selectedOption === correct) {
    // Respuesta correcta
    currentScore++;
    feedback.innerText = currentLang === 'es' ? "¡Correcto! 🎉" : "Correct! 🎉";
    feedback.className = "feedback correct";
    audioCache.correct.play();
    speak(currentLang === 'es' ? "¡Muy bien!" : "Great job!");
  } else {
    // Respuesta incorrecta
    feedback.innerText = currentLang === 'es' ? "Intenta otra vez... ❌" : "Try again... ❌";
    feedback.className = "feedback incorrect";
    audioCache.wrong.play();
    speak(currentLang === 'es' ? "Intenta de nuevo." : "Try again.");
    
    // Mostrar cuál era la correcta
    options.forEach(opt => {
      if (opt.dataset.optionId === correct) {
        opt.classList.add("correct-highlight");
      }
    });
    
    // No cambiar a la siguiente pregunta si es incorrecta
    setTimeout(() => {
      feedback.innerText = "";
      feedback.className = "feedback";
      options.forEach(opt => {
        opt.style.pointerEvents = "auto";
        opt.classList.remove("correct-highlight");
      });
    }, 2000);
    return;
  }

  // Esperar antes de mostrar la siguiente pregunta
  setTimeout(() => {
    feedback.innerText = "";
    feedback.className = "feedback";
    showQuestion();
  }, 1500);
}

/**
 * Muestra la pantalla de fin de juego
 */
function showGameOver() {
  const gameOverText = currentLang === 'es' 
    ? `¡Juego terminado! Tu puntuación final es: ${currentScore} de ${questions.length}`
    : `Game finished! Your final score is: ${currentScore} out of ${questions.length}`;
  
  document.getElementById("question").innerText = gameOverText;
  document.getElementById("optionsContainer").innerHTML = "";
  document.getElementById("reward").style.display = "block";
  document.getElementById("feedback").innerText = "";
  
  // Añadir botón para jugar de nuevo
  const playAgainBtn = document.createElement("button");
  playAgainBtn.innerText = currentLang === 'es' ? "Jugar de nuevo" : "Play again";
  playAgainBtn.className = "play-again-btn";
  playAgainBtn.onclick = restartGame;
  document.getElementById("optionsContainer").appendChild(playAgainBtn);
  
  // Reproducir sonido de victoria y hablar
  audioCache.win.play();
  
  const congratsMessage = currentLang === 'es' 
    ? `¡Muy bien! Has completado ${currentScore} de ${questions.length} preguntas correctamente.` 
    : `Well done! You've completed ${currentScore} out of ${questions.length} questions correctly.`;
  speak(congratsMessage);
}

/**
 * Reinicia el juego
 */
function restartGame() {
  usedQuestions = [];
  currentScore = 0;
  totalQuestions = 0;
  document.getElementById("feedback").innerText = "";
  document.getElementById("feedback").className = "feedback";
  showQuestion();
}

/**
 * Cambia el idioma del juego
 */
function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const langButton = document.getElementById("langButton");
  langButton.innerText = currentLang === 'es' ? "English" : "Español";
  restartGame();
}

// Inicializar elementos de la interfaz después de que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Precargar sonidos
  Object.values(audioCache).forEach(audio => {
    audio.load();
    audio.volume = 0.5;
  });
  
  // Añadir eventos a los botones
  document.getElementById("restartButton").addEventListener('click', restartGame);
  document.getElementById("langButton").addEventListener('click', toggleLanguage);
  
  // Iniciar el juego
  showQuestion();
});

