import React, { useState, useEffect } from 'react';
import './Options.css';

function Options({
  options,
  selectedOptions,
  currentQuestion,
  answer,
  questionType,
  handleOptionChange,
}) {
  
  const handleChange = (e, index) => {
    handleOptionChange(currentQuestion, index);
  };

  const SelectionType = () => {
    if (questionType === 'radio') {
      return <h2>Choose a correct option:</h2>;
    } else if (questionType === 'checkbox') {
      return <h2>Choose all correct options:</h2>;
    }
  };

  return (
    <div className="container-options">
      <SelectionType />
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type={questionType}
              id={`option${index}`}
              name={`question${currentQuestion}`}
              value={index}
              checked={selectedOptions[currentQuestion].includes(index)}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`option${index}`}>{option}</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Options;