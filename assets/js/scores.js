const scoresList = document.querySelector('#scoresList');

function displayScores() {
    const scores = JSON.parse(localStorage.getItem('players'));
    scores.forEach(score => {
        const scoreItem = document.createElement('li');
        scoreItem.setAttribute('class', 'score');
        scoreItem.textContent = score.name + ": " + score.score;
        scoresList.append(scoreItem);
    });
}

displayScores();

