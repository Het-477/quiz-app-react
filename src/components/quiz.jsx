import { useState } from "react";

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

    // used to change & display the value of selected option
    const [selectedOption, setSelectedOption] = useState("None");

    function handleSelectOption(option) {
        // console.log(option)
        setSelectedOption(option)
    }

    return (<>
        <div>
            <h1>Question 1</h1>
            <p className="question">{questionBank[0].question}</p>
            {questionBank[0].options.map(option => (
                // `map()` displays all the options 
                <button className="option"
                    onClick={() => handleSelectOption(option)}>
                    {option}</button>
                // when passing an argument in a function in jsx we need to do `() => func(args...)`
            ))}

            <p>Option selected: {selectedOption}</p>

            <div className="nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    </>)
}

export default Quiz

