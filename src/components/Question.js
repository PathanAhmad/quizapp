import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={styles.questionWrapper}>
      <h2 style={styles.questionText}>{question.questionText}</h2>
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
  questionWrapper: {
    marginLeft: '20px', // Consistent left margin
    marginBottom: '20px', // Space between questions
  },
  questionText: {
    margin: 0, // Remove default margin for consistent alignment
  },
  form: {
    marginTop: '10px',
  },
  option: {
    marginBottom: '10px', // Space between options
    display: 'flex',
    alignItems: 'center', // Align radio and label
  },
  radio: {
    marginRight: '10px',
  },
};

export default Question;
