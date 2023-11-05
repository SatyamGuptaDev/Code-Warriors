import React from 'react';
import { useState,useEffect } from 'react';
import './QuizForm.css';
import Options from './Options';


function Form({
  quiz,
  currentQuestion,
  quizEnded,
  setNumofCorrectAnswers,
  numofCorrectAnswers,
  setPoints,
  points,
  setTotalPoints

}) {
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quiz.questions.length).fill([])
  );
  const [numofCorrect, setNumofCorrect] = useState(
    Array(quiz.questions.length).fill(0)
  );
  const [answer, setAnswer] = useState([]);

  const [numofAttempted, setNumofAttempted] = useState(0);

  const handleOptionChange = (questionIndex, selectedOptionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    const currentSelectedOptions = newSelectedOptions[questionIndex];

    if (quiz.questions[questionIndex].answerSelectionType === 'single') {
      newSelectedOptions[questionIndex] = [selectedOptionIndex];
    } else if (quiz.questions[questionIndex].answerSelectionType === 'multiple') {
      if (currentSelectedOptions.includes(selectedOptionIndex)) {
        // If the option is already selected, remove it
        newSelectedOptions[questionIndex] = currentSelectedOptions.filter(
          (option) => option !== selectedOptionIndex
        );
      } else {
        // Otherwise, add it to the selected options
        newSelectedOptions[questionIndex] = [
          ...currentSelectedOptions,
          selectedOptionIndex,
        ];
      }
    }

    setSelectedOptions(() => newSelectedOptions);
  };

  // const [numofCorrect, setNumofCorrect] = useState(Array(quiz.questions.length).fill(0));

// In the useEffect that checks the correctness of answers, handle the case where no options are selected as the correct answer
useEffect(() => {
  if (quizEnded) {
    let count = 0;
    for (let i = 0; i < numofCorrect.length; i++) {
      if (numofCorrect[i] === 1) {
        count++;
      }
    }
    setNumofCorrectAnswers(count);

    // calculate the number of questions attempted by finding the number of elements in points[] which dont have 0
    let countAttempted = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] !== 0) {
        countAttempted++;
      }
    }
    setNumofAttempted(countAttempted);
  }
}, [quizEnded]);

useEffect(() => {
  if (quiz.questions[currentQuestion].answerSelectionType === 'single') {
    const correctAnswer = Number(quiz.questions[currentQuestion].correctAnswer) - 1;
    setAnswer(() => [correctAnswer]);
  } else if (quiz.questions[currentQuestion].answerSelectionType === 'multiple') {
    let correctAnswers = [...quiz.questions[currentQuestion].correctAnswer];
    correctAnswers = correctAnswers.map((answer) => Number(answer) - 1);
    setAnswer(() => correctAnswers);
  }
}, [currentQuestion]);

useEffect(() => {
  if (quiz.questions[currentQuestion].answerSelectionType === 'single') {
    if (selectedOptions[currentQuestion].length === 0) {
      // Treat no option selected as incorrect
      setNumofCorrect((prev) => {
        const newNumofCorrect = [...prev];
        newNumofCorrect[currentQuestion] = 0; // 0 for incorrect
        return newNumofCorrect;
      });
    } else if (selectedOptions[currentQuestion][0] === answer[0]) {
      setNumofCorrect((prev) => {
        const newNumofCorrect = [...prev];
        newNumofCorrect[currentQuestion] = 1; // 1 for correct
        return newNumofCorrect;
      });
    } else {
      setNumofCorrect((prev) => {
        const newNumofCorrect = [...prev];
        newNumofCorrect[currentQuestion] = 0; // 0 for incorrect
        return newNumofCorrect;
      });
    }
  } else if (quiz.questions[currentQuestion].answerSelectionType === 'multiple') {
    if (selectedOptions[currentQuestion].length === 0) {
      // Treat no option selected as incorrect
      setNumofCorrect((prev) => {
        const newNumofCorrect = [...prev];
        newNumofCorrect[currentQuestion] = 0; // 0 for incorrect
        return newNumofCorrect;
      });
    } else {
      let count = 0;
      for (let i = 0; i < selectedOptions[currentQuestion].length; i++) {
        if (answer.includes(selectedOptions[currentQuestion][i])) {
          count++;
        }
      }
      if (count === answer.length) {
        setNumofCorrect((prev) => {
          const newNumofCorrect = [...prev];
          newNumofCorrect[currentQuestion] = 1; // 1 for correct
          return newNumofCorrect;
        });
      } else {
        setNumofCorrect((prev) => {
          const newNumofCorrect = [...prev];
          newNumofCorrect[currentQuestion] = 0; // 0 for incorrect
          return newNumofCorrect;
        });
      }
    }
  }
}, [selectedOptions]);



useEffect(() => {
  if (quiz.questions[currentQuestion].answerSelectionType === 'single') {
    if (selectedOptions[currentQuestion].length === 0) {
      // Treat no option selected as incorrect
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints[currentQuestion] = -2; // -2 for incorrect
        return newPoints;
      });
    } else if (selectedOptions[currentQuestion][0] === answer[0]) {
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints[currentQuestion] = parseInt(quiz.questions[currentQuestion].point); // Set points for a correct answer
        return newPoints;
      });
    } else {
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints[currentQuestion] = -2; // -2 for incorrect
        return newPoints;
      });
    }
  } else if (quiz.questions[currentQuestion].answerSelectionType === 'multiple') {
    if (selectedOptions[currentQuestion].length === 0) {
      // Treat no option selected as incorrect
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints[currentQuestion] = -2; // -2 for incorrect
        return newPoints;
      });
    } else {
      let count = 0;
      for (let i = 0; i < selectedOptions[currentQuestion].length; i++) {
        if (answer.includes(selectedOptions[currentQuestion][i])) {
          count++;
        }
      }
      if (count === answer.length) {
        setPoints((prevPoints) => {
          const newPoints = [...prevPoints];
          newPoints[currentQuestion] = parseInt(quiz.questions[currentQuestion].point); // Set points for a correct answer
          return newPoints;
        });
      } else {
        setPoints((prevPoints) => {
          const newPoints = [...prevPoints];
          newPoints[currentQuestion] = -2; // -2 for incorrect
          return newPoints;
        });
      }
    }
  }
}, [selectedOptions]);



  function SelectionType() {
    if (quiz.questions[currentQuestion].answerSelectionType === 'single') {
      return (
        <div className="answers">
          <Options
            options={quiz.questions[currentQuestion].answers}
            selectedOptions={selectedOptions}
            currentQuestion={currentQuestion}
            answer={answer}
            questionType="radio"
            handleOptionChange={handleOptionChange}
          />
        </div>
      );
    } else if (quiz.questions[currentQuestion].answerSelectionType === 'multiple') {
      return (
        <div className="answers">
          <Options
            options={quiz.questions[currentQuestion].answers}
            selectedOptions={selectedOptions}
            currentQuestion={currentQuestion}
            answer={answer}
            questionType="checkbox"
            handleOptionChange={handleOptionChange}
          />
        </div>
      );
    }
  }

  return (
    <div className="quizform-body">
      {!quizEnded && (
        <div className="question p-4 bg-indigo-950 rounded-md">
          <h1 className=" font-bold">
            {quiz.questions[currentQuestion].question}
          </h1>
        </div>
      )}

      {!quizEnded && <SelectionType />}

      {quizEnded && (
        <div className="score mt-4">
          <div className="score-header">
          <h1 className="text-3xl font-bold">Quiz Ended</h1>
          <h1 className="text-2xl font-bold">RESULT:</h1>
          </div>
          <p> 
            <span>ATTEMPTED:</span> {numofAttempted} out of {quiz.questions.length} questions.
          </p>
          <p>
            <span>CORRECT ATTEMPTS:</span> {numofCorrectAnswers} out of {numofAttempted} of attempted questions. 
          </p>
          <p>
            <span>SCORE:</span> {points.reduce((a, b) => a + b, 0)} out of {setTotalPoints()} points.
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;