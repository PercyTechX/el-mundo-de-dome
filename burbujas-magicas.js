const gameContainer = document.getElementById('game-container');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const countdownElement = document.getElementById('countdown');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const playAgainButton = document.getElementById('play-again');
const gameInfo = document.getElementById('game-info');
const targetColorPreview = document.getElementById('target-color-preview');
const targetColorIndicator = document.getElementById('target-color-indicator');
const targetColorName = document.getElementById('target-color-name');
const targetColorNameSmall = document.getElementById('target-color-name-small');

const colors = [
    { name: 'rojo', value: '#FF6B6B' },
    { name: 'turquesa', value: '#4ECDC4' },
    { name: 'azul', value: '#45B7D1' },
    { name: 'verde', value: '#96CEB4' },
    { name: 'amarillo', value: '#FFEEAD' },
    { name: 'rosa', value: '#D4A5A5' }
];

const sounds = {
    correct: [
        new Audio('sounds/pop1.mp3'),
        new Audio('sounds/pop2.mp3'),
        new Audio('sounds/pop3.mp3')
    ],
    wrong: new Audio('sounds/wrong.mp3')
};

let gameActive = false;
let score = 0;
let gameTime = 30;
let countdown = 5;
let targetColor = null;
let isTouchDevice = 'ontouchstart' in window;

class Bubble {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'bubble';
        this.size = Math.random() * 50 + 30;
        this.x = Math.random() * (window.innerWidth - this.size);
        this.y = window.innerHeight;
        this.speed = Math.random() * 2.7 + 1.8;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.isPopped = false;
        
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundColor = this.color.value;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        
        gameContainer.appendChild(this.element);
        
        // Manejo de eventos táctiles y de clic
        if (isTouchDevice) {
            this.element.addEventListener('touchstart', (e) => {
                e.preventDefault(); // Prevenir el comportamiento por defecto
                this.handleInteraction();
            }, { passive: false });
        } else {
            this.element.addEventListener('click', () => this.handleInteraction());
        }
    }
    
    handleInteraction() {
        if (!gameActive || this.isPopped) return;
        this.isPopped = true;
        this.pop();
    }
    
    update() {
        this.y -= this.speed;
        this.element.style.top = `${this.y}px`;
        
        if (this.y < -this.size) {
            this.element.remove();
            return false;
        }
        return true;
    }
    
    pop() {
        if (this.color.value === targetColor.value) {
            const sound = sounds.correct[Math.floor(Math.random() * sounds.correct.length)];
            sound.currentTime = 0;
            sound.play();
            
            score++;
            scoreElement.textContent = `Burbujas explotadas: ${score}`;
            
            for (let i = 0; i < 3; i++) {
                this.createStar();
            }
            
            this.element.remove();
        } else {
            sounds.wrong.currentTime = 0;
            sounds.wrong.play();
            
            this.element.classList.add('wrong-bubble');
            setTimeout(() => {
                this.element.classList.remove('wrong-bubble');
                this.isPopped = false;
            }, 500);
        }
    }
    
    createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${this.x + this.size/2}px`;
        star.style.top = `${this.y + this.size/2}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        gameContainer.appendChild(star);
        
        let posX = this.x + this.size/2;
        let posY = this.y + this.size/2;
        let opacity = 1;
        
        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            
            star.style.left = `${posX}px`;
            star.style.top = `${posY}px`;
            star.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                star.remove();
            }
        };
        
        animate();
    }
}

const bubbles = [];
let lastBubbleTime = 0;

function createBubble() {
    if (!gameActive) return;
    
    const now = Date.now();
    if (now - lastBubbleTime > 500) {
        bubbles.push(new Bubble());
        lastBubbleTime = now;
    }
}

function updateBubbles() {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (!bubbles[i].update()) {
            bubbles.splice(i, 1);
        }
    }
}

function selectTargetColor() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    targetColorPreview.style.backgroundColor = targetColor.value;
    targetColorIndicator.style.backgroundColor = targetColor.value;
    targetColorName.textContent = targetColor.name;
    targetColorNameSmall.textContent = targetColor.name;
}

function startCountdown() {
    countdownElement.textContent = countdown;
    
    if (countdown > 0) {
        countdown--;
        setTimeout(startCountdown, 1000);
    } else {
        startScreen.classList.add('hidden');
        gameInfo.classList.remove('hidden');
        startGame();
    }
}

function startGame() {
    gameActive = true;
    score = 0;
    scoreElement.textContent = `Burbujas explotadas: ${score}`;
    
    const timer = setInterval(() => {
        gameTime--;
        timerElement.textContent = gameTime;
        
        if (gameTime <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameActive = false;
    gameInfo.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    // Limpiar burbujas restantes
    bubbles.forEach(bubble => bubble.element.remove());
    bubbles.length = 0;
}

function resetGame() {
    gameTime = 30;
    countdown = 5;
    timerElement.textContent = gameTime;
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    selectTargetColor();
    startCountdown();
}

function gameLoop() {
    createBubble();
    updateBubbles();
    requestAnimationFrame(gameLoop);
}

playAgainButton.addEventListener('click', resetGame);
selectTargetColor();
startCountdown();
gameLoop(); 