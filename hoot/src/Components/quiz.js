import React, { useState } from 'react';
import './quiz.css';
import owlLogo from './Images/owlLogo.png'; 

const QuizPopup = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  const questions2 = [
    {
      name: "Question 1",
      question: "What direction does supply point?",
      answer1: "down",
      answer2: "up",
      answer3: "no",
      answer4: "yes",
      correct: 4,
    }
  ]

  //push questions & answers into array
  // const generateQuestions = (numQuestions) => {
  //   const newQuestions = [];
  //   for (let i = 0; i < numQuestions; i++) {
  //     const question = {
  //       questionText: `Question ${i + 1}`,
  //       answerOptions: [
  //         { answerText: 'Answer 1', isCorrect: false },
  //         { answerText: 'Answer 2', isCorrect: false },
  //         { answerText: 'Answer 3', isCorrect: false },
  //         { answerText: 'Answer 4', isCorrect: true },
  //       ],
  //     };
  //     newQuestions.push(question);
  //   }
  //   return newQuestions;
  // };
    // const numOfQuestions = 5;
    // const questions = generate(Questions);


  const questions = [
    {
      questionText: 'According to the law of supply and demand, what happens to the demand for a product as its price rises?',
      answerOptions: [
        { answerText: 'Demand increases', isCorrect: true },
        { answerText: 'Demand remains the same', isCorrect: false },
        { answerText: 'Demand decreases', isCorrect: false },
        { answerText: 'Demand becomes unpredictable', isCorrect: false },
      ],
    },

  {
    questionText: 'Which of the following correctly describes the law of supply in relation to prices?',
    answerOptions: [
      { answerText: 'Higher prices lead to increased supply', isCorrect: true },
      { answerText: 'Lower prices lead to increased supply', isCorrect: false },
      { answerText: 'Higher prices lead to reduced supply', isCorrect: false },
      { answerText: 'Lower prices have no impact on supply', isCorrect: false },
    ],
  },

  {
    questionText: 'What does the equilibrium price represent in the context of supply and demand?',
    answerOptions: [
      { answerText: 'A price where demand exceeds supply', isCorrect: false },
      { answerText: 'A price that signals the unavailability of a product', isCorrect: false },
      { answerText: 'A market-clearing price where supply equals demand', isCorrect: true },
      { answerText: 'A price determined by external factors', isCorrect: false },
    ],
  },
  ];


  const initialQuestionState = {
    currentQuestion: 0,
    showScore: false,
    score: 0,
    showPopUp: false,
  };

  const [state, setState] = useState(initialQuestionState);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    }

    const nextQuestion = state.currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setState((prevState) => ({
        ...prevState,
        currentQuestion: nextQuestion,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        showScore: true,
      }));
    }
  };

  const handlePopUp = () => {
    setState((prevState) => ({
      ...prevState,
      showPopUp: true,
    }));
  };

  const handleClosePopUp = () => {
    setState(initialQuestionState);
  };

  const handlePreviousQuestion = () => {
    setState((prevState) => ({
      ...prevState,
      currentQuestion: prevState.currentQuestion - 1,
    }));
  };

  const handleNextQuestion = () => {
    setState((prevState) => ({
      ...prevState,
      currentQuestion: prevState.currentQuestion + 1,
    }));
  };

  return (
    <div className="quiz">
      {!state.showPopUp && (
        <div>
          <div className="owl-logo-container">
            <img src={owlLogo} alt="Owl Logo" className="owl-logo" />
          </div>
          <div className="navigation-section">
            <button onClick={handlePopUp}>Test your Knowledge!</button>
          </div>
        </div>
      )}

      {state.showPopUp ? (
        <div className="popup">
          <button className="close-button" onClick={handleClosePopUp}>
            Close
          </button>
          {state.showScore ? (
            <div className="score-section">
              You scored {state.score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {state.currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[state.currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                {questions[state.currentQuestion].answerOptions.map((answerOption, index) => (
                  <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>

              <div className="navigation-buttons">
                <button onClick={handlePreviousQuestion} disabled={state.currentQuestion === 0}>
                  Previous
                </button>
                <button onClick={handleNextQuestion} disabled={state.currentQuestion === questions.length - 1}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default QuizPopup;
