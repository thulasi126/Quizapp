import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const quizData = [
  {
    question:
      "Which of the following computer language is used for artificial intelligence?",
    options: ["Prolog", "c", "cobol", "Fortan"],
    answer: "Prolog",
  },
  {
    question: "Who invented C++?",
    options: [
      "Dennis Ritchie",
      "Ken Thompson",
      "Bjarne Stroustrup",
      "Rembrandt",
    ],
    answer: "Bjarne Stroustruo",
  },
  {
    question: "which of the following is not the OOPS concept",
    options: ["Polymorphism", "Inheritance", "Compilation", "Encapsulation"],
    answer: "Compilation",
  },
  {
    question: "which data structure is used for implementing recursion",
    options: ["Stack", "Queue", "list", "Array"],
    answer: "Stack",
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      <h4>choose the correct answet</h4>

      {quizCompleted ? (
        <Result answers={userAnswers} />
      ) : (
        <Question
          question={quizData[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default Quiz;
