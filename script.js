const quizData = [
    {
        question: "Você sabe qual é a função principal do assoalho pélvico?",
        options: [
            "Sustentar os órgãos pélvicos",
            "Controlar a digestão",
            "Regular a circulação",
            "Produzir hormônios"
        ],
        correct: 0,
        explanation: "O assoalho pélvico tem como função principal sustentar os órgãos pélvicos e auxiliar no controle das funções urinária e intestinal."
    },
    {
        question: "Qual destes hábitos pode enfraquecer o assoalho pélvico?",
        options: [
            "Beber bastante água",
            "Praticar exercícios físicos regularmente",
            "Segurar o xixi por muito tempo",
            "Dormir o suficiente"
        ],
        correct: 2,
        explanation: "Segurar o xixi por muito tempo pode enfraquecer o assoalho pélvico e aumentar o risco de infecções urinárias. É importante ir ao banheiro sempre que sentir vontade."
    },
    {
        question: "A fisioterapia pélvica pode ajudar em quais das seguintes situações?",
        options: [
            "Incontinência urinária",
            "Recuperação pós-parto",
            "Dor durante a relação sexual",
            "Todas as anteriores"
        ],
        correct: 3,
        explanation: "A fisioterapia pélvica pode ser uma solução eficaz para diversos problemas, como incontinência urinária, dores pélvicas e recuperação pós-parto."
    },
    {
        question: "Com que frequência é recomendado praticar exercícios para fortalecer o assoalho pélvico?",
        options: [
            "Uma vez por mês",
            "Três vezes por semana",
            "Uma vez por semana",
            "Todos os dias"
        ],
        correct: 3,
        explanation: "Exercícios diários ajudam a fortalecer o assoalho pélvico, mas sempre devem ser orientados por um profissional."
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizContainer.innerHTML = '';
    quizData.forEach((questionData, questionIndex) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        const questionTitle = document.createElement('h2');
        questionTitle.innerText = questionData.question;
        questionElement.appendChild(questionTitle);
        
        questionData.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${questionIndex}" value="${optionIndex}">
                ${option}
            `;
            questionElement.appendChild(label);
        });
        
        quizContainer.appendChild(questionElement);
    });
}

function getResults() {
    let score = 0;
    quizData.forEach((questionData, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === questionData.correct) {
            score++;
        }
    });
    
    resultContainer.innerHTML = `<p>Você acertou ${score} de ${quizData.length} questões!</p>`;
    
    quizData.forEach((questionData, questionIndex) => {
        const explanation = document.createElement('p');
        explanation.innerText = `Pergunta ${questionIndex + 1}: ${questionData.explanation}`;
        resultContainer.appendChild(explanation);
    });
}

submitButton.addEventListener('click', getResults);

loadQuiz();


