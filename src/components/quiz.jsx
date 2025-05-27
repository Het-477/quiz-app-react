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
    ]

    return (<>
        <div>
            <h1>Question 1</h1>
            <p className="question">{questionBank[0].question}</p>
            {questionBank[0].options.map(option => (
                <button className="option">{option}</button>
            ))}
        </div>
    </>)
}

export default Quiz

