document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const quizTitle = document.getElementById('quiz-title');

    // Quiz data
    const quizData = {
        general_knowledge: {
            title: "General Knowledge",
            questions: [
                {
                    question: "What is the capital of France?",
                    answers: ["Paris", "London", "Berlin", "Madrid"],
                    correct: 0
                },
                {
                    question: "Who wrote 'Hamlet'?",
                    answers: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
                    correct: 0
                },
                {
                    question: "What is the smallest country in the world?",
                    answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                    correct: 1
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    answers: ["Earth", "Mars", "Jupiter", "Venus"],
                    correct: 1
                },
                {
                    question: "Who painted the Mona Lisa?",
                    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                    correct: 2
                }
            ]
        },
        science: {
            title: "Science",
            questions: [
                {
                    question: "What is the chemical symbol for water?",
                    answers: ["O2", "H2O", "CO2", "NaCl"],
                    correct: 1
                },
                {
                    question: "How many planets are in our solar system?",
                    answers: ["7", "8", "9", "10"],
                    correct: 1
                },
                {
                    question: "What gas do plants absorb from the atmosphere?",
                    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "What is the center of an atom called?",
                    answers: ["Proton", "Electron", "Neutron", "Nucleus"],
                    correct: 3
                },
                {
                    question: "What is the speed of light?",
                    answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                    correct: 0
                }
            ]
        },
        mathematics: {
            title: "Mathematics",
            questions: [
                {
                    question: "What is 7 + 3?",
                    answers: ["5", "10", "12", "15"],
                    correct: 1
                },
                {
                    question: "What is the square root of 16?",
                    answers: ["2", "4", "8", "16"],
                    correct: 1
                },
                {
                    question: "What is the value of Pi (π) rounded to two decimal places?",
                    answers: ["3.14", "3.15", "3.16", "3.17"],
                    correct: 0
                },
                {
                    question: "What is 12 divided by 4?",
                    answers: ["2", "3", "4", "5"],
                    correct: 1
                },
                {
                    question: "What is the sum of the angles in a triangle?",
                    answers: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"],
                    correct: 0
                }
            ]
        }
    };

    // Get the selected topic from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    const selectedQuiz = quizData[topic];

    // Check if the selected quiz exists
    if (!selectedQuiz) {
        alert('Quiz not found!');
        window.location.href = 'index.html';
        return;
    }

    // Set the quiz title
    quizTitle.textContent = selectedQuiz.title;

    // Generate quiz questions
    selectedQuiz.questions.forEach((q, index) => {
        const questionElem = document.createElement('div');
        questionElem.className = 'question';

        const questionText = document.createElement('h3');
        questionText.textContent = q.question;
        questionElem.appendChild(questionText);

        q.answers.forEach((answer, i) => {
            const label = document.createElement('label');
            label.textContent = answer;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = i;
            label.prepend(input);

            questionElem.appendChild(label);
            questionElem.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionElem);
    });

    // Handle form submission
    submitBtn.addEventListener('click', () => {
        let score = 0;

        // Check each question
        selectedQuiz.questions.forEach((q, index) => {
            const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            if (userAnswer && parseInt(userAnswer.value) === q.correct) {
                score++;
            }
        });

        // Save score to localStorage and redirect to score page
        localStorage.setItem('quizScore', score);
        window.location.href = 'score.html';
    });
});
