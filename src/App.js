import React, { useState, useEffect } from 'react';
import './App.css';

 import background from '../src/assets/background.jpg';

 import FirstPage from './components/FirstPage';
 import QuestionPage from './components/Ouestion';
 import FinalPage from './components/FinalPage';

 import quizData from './knowledge-base/data.json'

 let interval;

 const  App = () =>  {

    const title = 'Cartoon-Characters-Expert-System'

    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
      if(step === 3) {
        clearInterval(interval);
      }
    }, [step]);
  

    const quizStartHandler = () => {
      setStep(2);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    const resetClickHandler = () => {
      setActiveQuestion(0);
      setAnswers([]);
      setStep(2);
      setTime(0);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return (
      <div className="App">
         <div  className="App-background" style={{ backgroundImage: `url(${background})`  }}>
          <header className="App-header">
            <h1>{title}</h1>
          </header>
          <div className="App-container">
            {step === 1 && <FirstPage onQuizStart={quizStartHandler} />}
            {step === 2 && <QuestionPage
                data={quizData.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={quizData.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
            /> }
             {step === 3 && <FinalPage 
                data={quizData.data}
                onReset={resetClickHandler}
                time={time}
              />}
          </div> 
         </div>
      </div>
    );
  }
export default App;