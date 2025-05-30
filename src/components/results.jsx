function Results({ userAnswers, questionBank, restartQuiz }) {

    const getFinalScore = () => {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
        });
        return finalScore;
    }

    const score = getFinalScore()
    const numberOfQues = questionBank.length;

    return (
        <>
            <div>
                <h2>Quiz Completed</h2>
                <p className="score">Your score: {score}/{numberOfQues}</p>
                <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
            </div>
        </>
    );
}

export default Results