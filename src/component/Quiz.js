import React, { useState } from "react";
import questions from "./Question";
import "../Css/Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  let feedback = "";

  if (score > 12) {
    feedback = " Excellent Job";
  } else if (score >= 8 && score <= 12) {
    feedback = "well tried";
  } else {
    feedback = (
      <a
        href="https://www.medicalnewstoday.com/articles/256521#sars"
        target="_blank"
        rel="noreferrer noopener"
      >
        learn more about covid
      </a>
    );
  }

  return (
    <div className="quizTab">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}{" "}
          <span className="cl-feed">{feedback}</span>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, key) => (
                <button
                  key={key}
                  className="buttonCss"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
