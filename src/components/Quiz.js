import React, { useState } from 'react';
import Question from './Question';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const questions = [
    { questionText: "What is the derivative of sin(x)?", answerOptions: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correctAnswer: "cos(x)" },
    { questionText: "What is the speed of light in a vacuum?", answerOptions: ["3.0 × 10^8 m/s", "5.0 × 10^6 m/s", "9.0 × 10^7 m/s", "1.5 × 10^8 m/s"], correctAnswer: "3.0 × 10^8 m/s" },
    { questionText: "Which element has the highest melting point?", answerOptions: ["Carbon", "Tungsten", "Iron", "Osmium"], correctAnswer: "Tungsten" },
    { questionText: "What is the formula for calculating kinetic energy?", answerOptions: ["1/2 mv^2", "mv^2", "mgh", "m/v"], correctAnswer: "1/2 mv^2" },
    { questionText: "What is the value of Planck's constant?", answerOptions: ["6.626 × 10^-34 Js", "3.142 × 10^-24 Js", "9.81 m/s²", "8.314 J/mol·K"], correctAnswer: "6.626 × 10^-34 Js" },
    { questionText: "Which planet has the strongest gravity?", answerOptions: ["Earth", "Jupiter", "Mars", "Saturn"], correctAnswer: "Jupiter" },
    { questionText: "In what year was the Higgs boson particle discovered?", answerOptions: ["2012", "2008", "2000", "2018"], correctAnswer: "2012" },
    { questionText: "What is the atomic number of Uranium?", answerOptions: ["92", "86", "100", "79"], correctAnswer: "92" },
    { questionText: "Which is the most abundant gas in Earth's atmosphere?", answerOptions: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correctAnswer: "Nitrogen" },
    { questionText: "Which of the following is a p-type semiconductor?", answerOptions: ["Silicon doped with Boron", "Pure Silicon", "Silicon doped with Phosphorus", "Pure Germanium"], correctAnswer: "Silicon doped with Boron" },
  ];

  const handleQuizCompletion = () => {
    setIsQuizFinished(true);
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div style={styles.pageContainer}>
      {isQuizFinished ? (
        <div style={styles.result}>
          <h2>Quiz Completed!</h2>
          <p>Your final score is: {score}/{questions.length}</p>
          <button style={styles.tryAgainButton} onClick={handleTryAgain}>Try Again</button>
        </div>
      ) : (
        <>
          <div style={styles.questionContainer}>
            <Question
              question={questions[currentQuestion]}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              score={score}
              setScore={setScore}
              totalQuestions={questions.length}
            />
          </div>
          
            

          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleBack} disabled={currentQuestion === 0}>
              Back
            </button>
            {/* <button style={styles.button} onClick={handleNext}>
              Next
            </button> */}
            <button style={styles.button} onClick={handleQuizCompletion}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    padding: '20px',
  },
  questionContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '100px',
  },
  buttonContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    justifyContent: 'space-between', // Adjusted for better alignment
    width: '200px', // Set a fixed width for consistency
  },
  button: {
    flex: 1, // Allow buttons to take equal space
    padding: '10px 0', // Adjust padding for better height
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    margin: '0 5px', // Add margin to separate buttons slightly
  },
  result: {
    textAlign: 'center',
    padding: '20px',
  },
  tryAgainButton: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Quiz;
