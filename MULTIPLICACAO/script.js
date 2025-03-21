let time = 60;
let points = 0;
let num1, num2;
let timerInterval;

function startGame() {
    points = 0;
    time = 60;
    document.getElementById("points").innerText = points;
    document.getElementById("time").innerText = time;
    
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";

    generateQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
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

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1; 
    num2 = Math.floor(Math.random() * 10) + 1; 

    document.getElementById("question").innerText = `${num1} × ${num2} = ?`;
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let correctAnswer = num1 * num2;

    if (userAnswer === correctAnswer) {
        points += 10;
        document.getElementById("points").innerText = points;
        generateQuestion();
    } else {
        alert("❌ Resposta errada! Tente novamente.");
    }
}

document.getElementById("answer").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function resetGame() {
    document.getElementById("start").style.display = "block";
    document.getElementById("game").style.display = "none";
}
