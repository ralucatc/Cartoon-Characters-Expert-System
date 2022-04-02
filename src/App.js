import React, { useState, useEffect } from "react";
import "./App.css";
import background from "../src/assets/background.jpg";
import kb from "./knowledge-base/characters";
import FirstPage from "./components/FirstPage";
import FinalPage from "./components/FinalPage";
import quizData from "./knowledge-base/data.json";

let interval;

const App = () => {

  const forwardChainingFunction = assertions => {
		let results = [];

		kb.forEach(k => {
			const dataPremises = k.premises;
			let isCorrect = true;

			assertions.forEach(assertion => {
				if (dataPremises.findIndex(data => data.attribute === assertion.attribute && data.value === assertion.value) === -1) {
					isCorrect = false;
				}
			})

			if (isCorrect) {
				results.push(k.conclusion.value);
        if( questionNumber === 5) {
          setImage(k.conclusion.img);
        }
			}
		});

		return results;
	}

  const title = "Cartoon Characters Expert System";

  const [step, setStep] = useState(1);
  const [time, setTime] = useState(0);
  const [conclusion, setConclusion] = useState("");
  const [image, setImage] = useState("");
  const [premises, setPremises] = useState([{ attribute: 'color', value: "cold_colors" }]);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);

    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    // setStep(1);
    // updatePremises("", "");
    // setTime(0);
    // interval = setInterval(() => {
    //   setTime((prevTime) => prevTime + 1);
    // }, 1000);
    window.location.reload(false);
  };

  const updatePremises = (attribute, value) => {

		let exists = false;

		let newPremises = premises;

		newPremises.forEach(p => {
			if (p.attribute === attribute) {
				p.value = value;
				exists = true;
			}
		})

		if (!exists) {

			newPremises = [...premises, { attribute, value }]
		}

    setQuestionNumber(questionNumber + 1);
		console.log(forwardChainingFunction(newPremises));
		setPremises(newPremises);

	}

  const handleCompleted = () => {
		console.log("Quiz completed!");
		console.log(premises);
		setConclusion(forwardChainingFunction(premises)[0]);
    setStep(3);
	}

  return (
    <div className="App">
      <div
        className="App-background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <header className="App-header">
          <h1>{title}</h1>
        </header>
        <div className="App-container">
          {step === 1 && <FirstPage onQuizStart={quizStartHandler} />}
          {step === 2 && (
            <div className="card">
               { questionNumber === 1 ?
              <div className="card-content">
              <div className="content">
              <h2 className="mb-5">What's your favorite color?</h2>
              <div className="control"  >
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "cold_colors")} id="radio11" name="radio1" type="radio" />
                <label htmlFor="radio11" className="buttonText">green</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "cold_colors")} id="radio12" name="radio1" type="radio" />
                <label htmlFor="radio12" className="buttonText">blue</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "cold_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">purple</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "warm_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">red</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "warm_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">orange</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "warm_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">yellow</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "warm_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">pink</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "non_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">white</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => updatePremises("color", "non_colors")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">black</label>
              </div>
              </div>
              </div>
            </div>
            : null}
            {questionNumber === 2 ?
              <div className="card-content">
                <div className="content">
              <h2 className="mb-5">What's your favorite food?</h2>
                <div className="control" >
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "junk_food")} id="radio21" name="radio2" type="radio" />
                    <label htmlFor="radio21" className="buttonText">chili con carne</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "junk_food")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">meat</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "junk_food")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">nachos</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "sweets")} id="radio21" name="radio2" type="radio" />
                    <label htmlFor="radio21" className="buttonText">ice cream</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "sweets")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">pudding</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "sweets")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">cereals</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "healthy_food")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">bananas</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("food", "healthy_food")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">spinach</label>
                  </div>
                </div>
                </div>
              </div>
              : null}
            {questionNumber === 3 ?
              <div className="card-content">
              <div className="content">
              <h2 className="mb-5">Choose one activity that you enjoy the most:</h2>
                <div className="control" >
                <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "education")} id="radio21" name="radio2" type="radio" />
                    <label htmlFor="radio21" className="buttonText">reading books</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "education")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">discovering new things</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "education")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">drawing</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "outdoor_activity")} id="radio21" name="radio2" type="radio" />
                    <label htmlFor="radio21" className="buttonText">ballet</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "outdoor_activity")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">tennis</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "outdoor_activity")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">childhood games</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "indoor_activity")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">video games</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "indoor_activity")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">cooking</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("activity", "indoor_activity")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">watching Netflix</label>
                  </div>
                  </div>
                  </div>
              </div>
              : null}
            {questionNumber === 4 ?
              <div className="card-content">
                <div className="content">
                <h2 className="mb-5">Choose your favorite school subject:</h2>
                <div className="control" >
                <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "dumb")} id="radio21" name="radio2" type="radio" />
                    <label htmlFor="radio21" className="buttonText">sport</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "dumb")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">I hate all subjects</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "dumb")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">I didn't go to school</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "not_dumb_not_smart")} id="radio21" name="radio2" type="radio" />
                    <label htmlFor="radio21" className="buttonText">languages</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "not_dumb_not_smart")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">arts</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "not_dumb_not_smart")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">literature</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "really_smart")} id="radio22" name="radio2" type="radio" />
                    <label htmlFor="radio22" className="buttonText">I love all subjects</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "really_smart")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">science</label>
                  </div>
                  <div className="inputGroup">
                    <input onClick={() => updatePremises("subject", "really_smart")} id="radio23" name="radio2" type="radio" />
                    <label htmlFor="radio23" className="buttonText">math</label>
                  </div>
                </div>
                </div>
              </div>
              : null}
            {questionNumber === 5 ? handleCompleted() : null}
          
          </div>
          )}
          {step === 3 && (
            <FinalPage
              data={quizData.data}
              onReset={resetClickHandler}
              time={time}
              conclusion={conclusion}
              image={image}
            />
          )}
        </div>
      </div>
    </div>
  );

};
export default App;
