import { useState } from "react";
import Results from "./results";

function Quiz() {
    const questionBank = [
        {
            question: "What is the other name of the country canada ?",
            options: ["zeckh republic", "punjab", "croasia", "africa"],
            answer: "punjab"
        },
        {
            question: "What is the other name of the punjab ?",
            options: ["zeckh republic", "canada", "croasia", "africa"],
            answer: "canada"
        },
        {
            question: "What is the worst programming language in the world ?",
            options: ["All", "java", "brainFuck", "javascript"],
            answer: "All"
        }
    ];

    const initialAnswers = [null, null, null];

    // setting user's answers 
    const [userAnswers, setUserAnswer] = useState(initialAnswers);
    // setting questions 
    const [currentQuestion, setCurrentQuestion] = useState(0); // '0' cuz question array starts at '0'

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        // Logs 
        // console.log("crtQuestion: " + currentQuestion)
        // console.log("option: " + option)
        // console.log("newusr[crtQuestion]: " + newUserAnswers[currentQuestion])
        // console.log("newUserans: " + newUserAnswers)

        setUserAnswer(newUserAnswers);
        // console.log("setUserAns: " + setUserAnswer(newUserAnswers))
    }

    function gotoNextQuestion() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function gotoPrevQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    if (isQuizFinished) {
        return <Results />
    }

    return (<>
        <div>
            <h1>Question {currentQuestion + 1}</h1>
            <p className="question">{questionBank[currentQuestion].question}</p>

            {questionBank[currentQuestion].options.map(option => (
                <button className={"option" + (selectedAnswer === option ? " selected" : "")}
                    onClick={() => handleSelectOption(option)}>
                    {option}</button>
                // when passing an argument in a function in jsx we need to do `() => func(args...)`
            ))}


            <div className="nav-buttons">
                <button onClick={gotoPrevQuestion} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={gotoNextQuestion} disabled={!selectedAnswer}>
                    {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    </>)
}

export default Quiz

