import { useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz";

function App() {
    const quiz = [
        {
            id: 1,
            question: "Atatürk kaç yılında doğdu",
            a: "1938",
            b: "1880",
            c: "1881",
            d: "1900",
            corretAnswer: "1881",
        },
        {
            id: 2,
            question: "İstanbulu kim fethetti",
            a: "Fatih Sultan Mehmet",
            b: "Kanuni Sultan Süleyman",
            c: "Yavuz Sultan Selim",
            d: "Mustafa Kemal Atatürk",
            corretAnswer: "Fatih Sultan Mehmet",
        },
        {
            id: 3,
            question: "Bu sene kim şampiyon?",
            a: "Fenerbahçe",
            b: "Trabzonspor",
            c: "Galatasaray",
            d: "Beşiktaş",
            corretAnswer: "Trabzonspor",
        },
        {
            id: 4,
            question: "1. Dünya savaşı ne zaman başladı",
            a: "1940",
            b: "1914",
            c: "1905",
            d: "1900",
            corretAnswer: "1914",
        },
        {
            id: 5,
            question: "2. Dünya savaşı ne zaman başladı",
            a: "1939",
            b: "1920",
            c: "1950",
            d: "1945",
            corretAnswer: "1939",
        },
        {
            id: 6,
            question: "2022 yılında Rusya kime saldırdı?",
            a: "Polonya",
            b: "Ukrayna",
            c: "ABD",
            d: "Çin",
            corretAnswer: "Ukrayna",
        },
    ];

    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    const onClickButton = (e) => {
        e.preventDefault();

        if (quiz[counter].id < quiz.length) {
            setCounter(counter + 1);
        } else {
            alert("Quiz Bitti");
            setCompleted(true);
        }

        if (e.target.value === quiz[counter].corretAnswer) {
            setScore(score + 1);
        }
    };

    return (
        <div className="App">
            {completed ? (
                `
               Doğru cevap sayısı ${score}
              `
            ) : (
                <Quiz
                    quiz={quiz}
                    onClickButton={onClickButton}
                    counter={counter}
                />
            )}
        </div>
    );
}

export default App;
