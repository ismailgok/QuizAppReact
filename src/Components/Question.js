const Question = ({ questions, currentQuestion, onClickButton }) => {
    return (
        <div className="question">
            <span>Soru:{currentQuestion + 1}</span>{" "}
            <h2>{questions[currentQuestion].title}</h2>
            {questions[currentQuestion].answers.map((item, index) => (
                <button key={index} onClick={() => onClickButton(item.correct,item.answer)}>
                    {item.answer}
                </button>
            ))}
        </div>
    );
};

export default Question;
