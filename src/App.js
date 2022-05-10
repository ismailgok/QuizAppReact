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

    const onClickButton = (correct) => {
        const nextQuestion = currentQuestion + 1;
        if (correct === true) {
            setScore(score + 1);
        }
        if (nextQuestion < questions.length) {
            console.log(nextQuestion, questions.length);
            setCurrentQuestion(nextQuestion);
        } else {
            setShowQuestion(false);
        }
    };

    return (
        <div className="App">
            {showQuestion ? (
                <Question
                    questions={questions}
                    currentQuestion={currentQuestion}
            {completed ? (
                `
               Doğru cevap sayısı ${score}
                `
            ) : (
                <Quiz
                    quiz={quiz}
                    onClickButton={onClickButton}
                />
            ) : (
                <div>Doğru cevap sayısı: {score}</div>
            )}
        </div>
    );
}

export default App;
