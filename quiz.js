const questions = [
    { question: "¿Cuál es la capital de Francia?", options: ["París", "Londres", "Madrid", "Roma"], correct: 0 },
    { question: "¿Qué elemento tiene el símbolo 'O'?", options: ["Oro", "Oxígeno", "Osmio", "Olivino"], correct: 1 },
    { question: "¿Quién pintó la Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct: 1 },
    { question: "¿Cuál es el continente más grande?", options: ["Asia", "África", "Europa", "América"], correct: 0 },
    { question: "¿En qué año llegó el hombre a la Luna?", options: ["1969", "1979", "1959", "1989"], correct: 0 },
    // Añadir más preguntas según sea necesario
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');

    questionContainer.innerHTML = questionData.question;
   
