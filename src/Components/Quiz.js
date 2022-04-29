import React from "react";

const Quiz = ({ quiz, onClickButton, counter }) => {
    return (
        <div>
            <h2>Quiz</h2>
            <h4>{quiz[counter].question}</h4>
            <div>
                <button onClick={onClickButton} value={quiz[counter].a}>
                    {quiz[counter].a}
                </button>
            </div>
            <div>
                <button onClick={onClickButton} value={quiz[counter].b}>
                    {quiz[counter].b}
                </button>
            </div>
            <div>
                <button onClick={onClickButton} value={quiz[counter].c}>
                    {quiz[counter].c}
                </button>
            </div>
            <div>
                <button onClick={onClickButton} value={quiz[counter].d}>
                    {quiz[counter].d}
                </button>
            </div>
        </div>
    );
};

export default Quiz;
