import React from "react";

function Result({ answers }) {
  const quizData = [
    {
      question:
        "Which of the following computer language used for artificial intelligence?",
      options: ["Prolog", "Fortan", "C", "Cobol"],
      answer: "Prolog",
    },
    {
      question: "Who invented c++",
      options: [
        "Dennisn Ritchie",
        "Ken Thompson",
        "Bjarne Stroustrup",
        "Rembrandt",
      ],
      answer: "Bjarne Stroustrup",
    },
    {
      question: "Which of the following is not an OOPS concept",
      options: ["Polymorphism", "Inheritance", "Compilation", "Encapsulation"],
      answer: "Compilation",
    },
    {
      question: "Which data structure is used for implementing recursion",
      options: ["Stack", "Queue", "List", "Array"],
      answer: "Stack",
    },
  ];

  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === quizData[index].answer) {
      score++;
    }
  });

  return (
    <div>
      <h2>Quiz Completed!</h2>
      
      <p>
        Your Score: {score} / {quizData.length}
      </p>
    </div>
  );
}

export default Result;
