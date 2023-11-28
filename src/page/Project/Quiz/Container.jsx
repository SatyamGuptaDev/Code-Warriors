import React , { useState,useEffect,useRef }  from 'react'
import './Container.css'
import Form from './QuizForm'
import bg from './wallpaperflare.com.jpg'
import { useNavigate, Link } from 'react-router-dom'


import Timer from './Timer'
import { init } from 'aos'



function QuizContainer({
  quiz,
  initialSeconds = 120,
  setPoints,
  points,
  setquizEnded
}) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numofCorrectAnswers, setNumofCorrectAnswers] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  useEffect(() => {
    if(quizEnded == true){
      setquizEnded(true);
    }
  }, [quizEnded]);

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  const handleStarter = () => {
    const setQuizStarter = document.querySelector('.starter');
    setQuizStarter.classList.add('fade-out');

    setTimeout(() => {
      setQuizStarted(true);
    }, 500);
  }

  const onsubmit = () => {
    setQuizEnded(true);
  }

  const calculateDifficulty = () => {
    const currentQuestionData = quiz.questions[currentQuestion];
    if (currentQuestionData.point === "5") {
      return "Easy";
    } else if (currentQuestionData.point === "10") {
      return "Medium";
    } else if (currentQuestionData.point === "15") {
      return "Hard";
    }
  }

  const handleTimeout = () => {
    // submit the quiz
    onsubmit();
    
  }

  const setTotalPoints = () => {
    let totalPoints = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
      totalPoints += Number(quiz.questions[i].point);
    }
    return totalPoints;
  }


  return (
    <>
      <div className='quiz-bg' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',   height: '100vh', width: '30vw', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'blur(20px) brightness(0.7)', position: 'absolute', left: 0, top: 0, zIndex: '-100' }}></div>
      <div className='quiz-body'>
        <div className='max-width'>
          {quizStarted ? (
            <div className='quizz-container'>
                {!quizEnded && <div className='quizz-header'>
                      <div className='question-count'>
                        <p>
                          <span>{currentQuestion + 1} </span>/{quiz.questions.length}
                        </p>
                      </div>
                      <div className='timer'>
                        <Timer initialSeconds={initialSeconds} onTimeout={handleTimeout} />
                      </div>
                      <div className='difficulty'>
                        <p>Difficulty: <span>{calculateDifficulty()}</span> </p>
                      </div>
                </div>}
              <div className='form'>
                <Form
                  quiz={quiz}
                  currentQuestion={currentQuestion}
                  quizEnded={quizEnded}
                  setNumofCorrectAnswers={setNumofCorrectAnswers}
                  numofCorrectAnswers={numofCorrectAnswers}
                  setPoints={setPoints}
                  points={points}
                  setTotalPoints={setTotalPoints}
                />
              </div>
              <div className='buttons'>
                {currentQuestion > 0 && !quizEnded && (
                  <button className='button-1  bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handlePrev}>
                    Prev
                  </button>
                )}
                {currentQuestion < quiz.questions.length - 1 && !quizEnded && (
                  <button className='button-1  bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={handleNext}>
                    Next
                  </button>
                )}
                {currentQuestion === quiz.questions.length - 1 && !quizEnded && (
                  <button className='button-29  bg-blue-500 hover-bg-blue-700 text-white font-bold py-4 px-4 rounded' style={{width: '150px', height: '60px'}} onClick={onsubmit}>
                    Submit
                  </button>
                )}
                {quizEnded && (
                  <a href="/project/js"><button className='button-29  bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() =>  {}}>
                    Exit
                  </button></a>
                )}
              </div>
            </div>
          ) : (
            <div className='starter'>
              <div className='heading-starter'>
                <h1 className='text-6xl mb-1'> React - Quiz</h1>
                <p className='text-2xl'>Test your knowledge</p>
              </div>
              <div>
                <h3 className='text-3xl text-left '><p className='text-2xl text-left inline-block'> Time for quiz:  </p> {initialSeconds} sec</h3>
                <h3 className='text-3xl text-left '><p className='text-2xl text-left inline-block'> Questions: </p> {quiz.questions.length} </h3>
                <h3 className='text-3xl text-left '><p className='text-2xl text-left inline-block'> Points you can score: </p> {setTotalPoints()} </h3>
              </div>
              <div className='text-3xl' >
                <button onClick={handleStarter} className='button-29 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' role='button'>START</button>
              </div>
              <div className=' points-rule text-left'>
                <h2>Points Rules:</h2>
                <p>Easy question:  5 points</p>
                <p>Medium question:  10 points</p>
                <p>Hard question:  15 points</p>
                <p>For Wrong Attempt:  -2 points</p>
                <p>For Not Attempting:  0 points</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuizContainer;



