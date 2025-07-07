let currentQuestionIndex = 0;
let answers = [];
let currentLang = 'fr';

// Fonction pour obtenir la langue actuelle
function getCurrentLang() {
    return document.documentElement.lang || currentLang;
}

// Fonction pour afficher une question
function displayQuestion(index) {
    const lang = getCurrentLang();
    const questionContainer = document.getElementById('question-container');
    const question = questions[index][lang];
    
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <div class="options">
            ${translations[lang].options.map((option, i) => `
                <label class="option">
                    <input type="radio" name="answer" value="${i}" ${answers[index] === i ? 'checked' : ''}>
                    <span class="option-text">${option}</span>
                </label>
            `).join('')}
        </div>
    `;

    // Mise à jour de la barre de progression
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    // Mise à jour des boutons de navigation
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    
    prevButton.classList.toggle('hidden', index === 0);
    nextButton.textContent = index === questions.length - 1 ? 
        translations[lang].see_results : 
        translations[lang].next;

    // Afficher l'explication si une réponse a été donnée
    if (answers[index] !== undefined) {
        showExplanation(index);
    } else {
        hideExplanation();
    }
}

// Fonction pour afficher l'explication
function showExplanation(index) {
    const lang = getCurrentLang();
    const explanation = document.getElementById('explanation');
    explanation.classList.remove('hidden');
    explanation.innerHTML = `
        <h4>${translations[lang].understand_symptom}</h4>
        <p>${questions[index][lang].explanation}</p>
    `;
}

// Fonction pour cacher l'explication
function hideExplanation() {
    document.getElementById('explanation').classList.add('hidden');
}

// Fonction pour calculer et afficher le score
function showResults() {
    const lang = getCurrentLang();
    const totalScore = calculateScore();
    const scoreRange = getScoreRange(totalScore);
    
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    const finalScore = document.getElementById('final-score');
    finalScore.textContent = totalScore;
    
    const scoreExplanation = document.getElementById('score-explanation');
    scoreExplanation.innerHTML = `
        <p>${scoreRange[lang].explanation}</p>
        <h3>${translations[lang].what_next}</h3>
        <ul>
            ${translations[lang].additional_info.map(info => `<li>${info}</li>`).join('')}
        </ul>
    `;
}

// Fonction pour calculer le score
function calculateScore() {
    const totalQuestions = questions.length;
    const totalPoints = answers.reduce((sum, answer) => sum + (answer || 0), 0);
    return Math.round((totalPoints / (totalQuestions * 3)) * 100);
}

// Fonction pour obtenir la plage de score
function getScoreRange(score) {
    return scoreRanges.find(range => score >= range.min && score <= range.max);
}

// Gestionnaires d'événements
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startTest');
    const nextButton = document.getElementById('nextQuestion');
    const prevButton = document.getElementById('prevQuestion');
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro').classList.add('hidden');
        document.getElementById('quiz').classList.remove('hidden');
        displayQuestion(currentQuestionIndex);
    });
    
    nextButton.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        
        if (!selectedAnswer && currentQuestionIndex < questions.length) {
            alert(translations[getCurrentLang()].answer_all);
            return;
        }
        
        if (selectedAnswer) {
            answers[currentQuestionIndex] = parseInt(selectedAnswer.value);
        }
        
        if (currentQuestionIndex === questions.length - 1) {
            showResults();
        } else {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    });
    
    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    });
    
    // Écouteur pour les réponses
    document.getElementById('question-container').addEventListener('change', (e) => {
        if (e.target.name === 'answer') {
            answers[currentQuestionIndex] = parseInt(e.target.value);
            showExplanation(currentQuestionIndex);
        }
    });
}); 