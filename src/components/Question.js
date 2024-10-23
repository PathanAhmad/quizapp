import React, { useState } from 'react';

const Question = ({ question, currentQuestion, setCurrentQuestion, score, setScore, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>{question.questionText}</h2>
      <form style={styles.form}>
        {question.answerOptions.map((option, index) => (
          <div key={index} style={styles.option}>
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              style={styles.radio}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

const styles = {
  form: {
    marginTop: '10px',
  },
  option: {
    marginBottom: '10px',
  },
  radio: {
    marginRight: '10px',
  },
};

export default Question;
