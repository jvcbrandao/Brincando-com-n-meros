let time = 60;
let points = 0;
let num1, num2, operator;
let timerInterval;

function startGame() {
    points = 0;
    time = 60;
    document.getElementById("points").innerText = points;
    document.getElementById("time").innerText = time;
    
    // Mostrar o jogo e esconder o botão inicial
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";

    generateQuestion();
    startTimer();
}

// Inicia o cronômetro
function startTimer() {
    clearInterval(timerInterval); // Evita múltiplos timers
    timerInterval = setInterval(() => {
        time--;
        document.getElementById("time").innerText = time;
        if (time <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Tempo esgotado! Você fez " + points + " pontos.");
            resetGame();
        }
    }, 1000);
}

// Gera uma nova conta com números maiores (entre 10 e 99)
function generateQuestion() {
    num1 = Math.floor(Math.random() * 90) + 10; // Gera entre 10 e 99
    num2 = Math.floor(Math.random() * 90) + 10; // Gera entre 10 e 99
    operator = Math.random() < 0.5 ? '+' : '-';

    document.getElementById("question").innerText = `${num1} ${operator} ${num2} = ?`;
    document.getElementById("answer").value = ""; // Limpa o campo de resposta
    document.getElementById("answer").focus(); // Foca no input para digitação rápida
}

// Verifica a resposta
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

    if (userAnswer === correctAnswer) {
        points += 10;
        document.getElementById("points").innerText = points;
        generateQuestion();
    } else {
        alert("❌ Resposta errada! Tente novamente.");
    }
}

// Permite verificar a resposta ao pressionar ENTER
document.getElementById("answer").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function resetGame() {
    document.getElementById("start").style.display = "block";
    document.getElementById("game").style.display = "none";
}
