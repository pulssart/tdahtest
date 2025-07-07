const translations = {
    fr: {
        options: [
            "Jamais ou rarement",
            "Parfois",
            "Souvent",
            "Très souvent"
        ],
        understand_symptom: "Comprendre ce symptôme :",
        next: "Question suivante",
        previous: "Question précédente",
        see_results: "Voir les résultats",
        answer_all: "Veuillez répondre à toutes les questions avant de voir les résultats.",
        what_next: "Que faire maintenant ?",
        additional_info: [
            "Ce test n'est qu'un outil d'information et ne constitue pas un diagnostic.",
            "Si vous avez des préoccupations, consultez un professionnel de santé spécialisé.",
            "Continuez à vous informer sur le TDAH et ses manifestations.",
            "Parlez-en avec vos proches et cherchez du soutien si nécessaire."
        ]
    },
    en: {
        options: [
            "Never or rarely",
            "Sometimes",
            "Often",
            "Very often"
        ],
        understand_symptom: "Understanding this symptom:",
        next: "Next question",
        previous: "Previous question",
        see_results: "See results",
        answer_all: "Please answer all questions before seeing the results.",
        what_next: "What to do next?",
        additional_info: [
            "This test is only an informational tool and does not constitute a diagnosis.",
            "If you have concerns, consult a specialized healthcare professional.",
            "Continue to learn about ADHD and its manifestations.",
            "Talk about it with your loved ones and seek support if needed."
        ]
    }
};

// Gestion du changement de langue
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Fonction pour changer la langue
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        langButtons.forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.lang === lang);
        });
        
        // Mettre à jour les options des questions si elles sont affichées
        if (window.currentQuestionIndex !== undefined) {
            displayQuestion(window.currentQuestionIndex);
        }
    }

    // Écouteurs d'événements pour les boutons de langue
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Initialiser la langue par défaut
    changeLanguage('fr');
}); 