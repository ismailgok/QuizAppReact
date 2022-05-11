import { useState } from "react";
import "./App.css";
import Question from "./Components/Question";

const questions = [
    {
        id: 1,
        title: "Atatürk kaç yılında doğdu?",
        answers: [
            {
                answer: "1936",
                correct: false,
            },
            {
                answer: "1938",
                correct: false,
            },
            {
                answer: "1881",
                correct: true,
            },
            {
                answer: "1900",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        title: "İstanbulu kim fethetti?",
        answers: [
            {
                answer: "Fatih Sultan Mehmet",
                correct: true,
            },
            {
                answer: "Kanuni Sultan Süleyman",
                correct: false,
            },
            {
                answer: "Yavuz Sultan Selim",
                correct: false,
            },
            {
                answer: "Mustafa Kemal Atatürk",
                correct: false,
            },
            {
                answer: "Yıldırım Bayezit",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        title: "Bu sene kim şampiyon?",
        answers: [
            {
                answer: "Fenerbahçe",
                correct: false,
            },
            {
                answer: "Trabzonspor",
                correct: true,
            },
            {
                answer: "Beşiktaş",
                correct: false,
            },
            {
                answer: "Galatasaray",
                correct: false,
            },
            {
                answer: "Başakşehir",
                correct: false,
            },
        ],
    },
    {
        id: 4,
        title: "1. Dünya savaşı ne zaman başladı?",
        answers: [
            {
                answer: "1940",
                correct: false,
            },
            {
                answer: "1918",
                correct: false,
            },
            {
                answer: "1914",
                correct: true,
            },
            {
                answer: "1920",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        title: "2. Dünya savaşı ne zaman başladı?",
        answers: [
            {
                answer: "1939",
                correct: true,
            },
            {
                answer: "1950",
                correct: false,
            },
            {
                answer: "1951",
                correct: false,
            },
            {
                answer: "1940",
                correct: false,
            },
        ],
    },
    {
        id: 6,
        title: "2022 yılında Rusya kime saldırdı?",
        answers: [
            {
                answer: "Polonya",
                correct: false,
            },
            {
                answer: "Ukrayna",
                correct: true,
            },
            {
                answer: "Türkiye",
                correct: false,
            },
            {
                answer: "ABD",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        title: "18 yaşından büyük müsün?",
        answers: [
            {
                answer: "Evet",
                correct: true,
            },
            {
                answer: "Hayır",
                correct: false,
            },
        ],
    },
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);
    const [score, setScore] = useState(0);
    const [findCorrect, setfindCorrect] = useState([]);
    const [correctShow, setCorrectShow] = useState(false);
    const [showResponse, setShowResponse] = useState([]);

    const onClickButton = (correct, answer, data) => {
        const nextQuestion = currentQuestion + 1;
        if (correct) {
            setScore(score + 1);
            setfindCorrect((findCorrect) => [
                ...findCorrect,
                questions[currentQuestion].answers.find(
                    (item) => item.answer === answer
                ),
            ]);
        }
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowQuestion(false);
        }
        setShowResponse((showResponse) => [...showResponse, data]);
        //setShowResponse((showResponse) => [...showResponse, questions[currentQuestion]]);
    };

    return (
        <div className="App">
            {showQuestion ? (
                <Question
                    questions={questions}
                    currentQuestion={currentQuestion}
                    onClickButton={onClickButton}
                />
            ) : (
                <div>
                    Doğru cevap sayısı: {score}
                    <br />
                    Yanlış cevap sayısı: {questions.length - score}
                    <br />
                    <br />
                    {(score && (
                        <button onClick={() => setCorrectShow(true)}>
                            Doğru cevapları göster
                        </button>
                    )) || <div></div>}
                    <br />
                    <br />
                    {correctShow && (
                        <div>
                            {findCorrect.map((item, index) => (
                                <li key={index}>{item.answer}</li>
                            ))}
                            {showResponse.map((response, index) => (
                                <div key={index} className="question">
                                    <h2>{response.title}</h2>
                                    {response.answers.map((item, index) => (
                                        <button
                                            key={index}
                                            className={
                                                findCorrect.find(
                                                    (answer) =>
                                                        answer.answer ===
                                                        item.answer
                                                )
                                                    ? "success"
                                                    : ""
                                            }
                                        >
                                            {item.answer}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    <br />
                </div>
            )}
        </div>
    );
}

export default App;
