document.addEventListener('DOMContentLoaded', () => {
    const scoreContainer = document.getElementById('final-score');
    const score = localStorage.getItem('quizScore');

    // Display the score if it is available
    if (score !== null) {
        scoreContainer.textContent = `Your score is ${score} out of 5`;
    } else {
        scoreContainer.textContent = 'No score available';
    }

    // Clear the score from localStorage after displaying it
    localStorage.removeItem('quizScore');
});
