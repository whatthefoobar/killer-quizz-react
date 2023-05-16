import React, { useReducer, useState } from "react";
import "./Questionnaire.css";
import { questions } from "../util/data";

import { initialState, formReducer } from "../util/formReducer";

const Questionnaire = () => {
  // const [result, setResult] = useState({
  //   image: "",
  //   title: "",
  //   description: "",
  // });
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { currentQuestionIndex, answers } = state;
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    dispatch({ type: "SELECT_ANSWER", payload: answer });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handlePrev = () => {
    dispatch({ type: "PREV_QUESTION" });
  };

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CALCULATE_SCORE" });
    // displatch a calculate result reducer action that returns object values to populate our result box
    // console.log(showResultCategory(state.score));
    dispatch({ type: "GET_RESULT" });
    console.log(
      `Result: ${state.result.image}, ${state.result.title} ${state.result.description}`
    );
    console.log(`Name: ${state.name}, Score: ${state.score}`);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const result = (
    <div className="resultBox">
      <img className="result-img" src={state.result.image} alt="result" />
      <h2>{state.result.title}</h2>
      <p>{state.result.description}</p>
    </div>
  );

  return (
    <div className="questionnaire">
      <form onSubmit={handleSubmit}>
        <div className="questionnaire--qna">
          <h2>{currentQuestion.question}</h2>
          {!currentQuestion.input ? (
            currentQuestion.options.map((option) => (
              <div key={option.value}>
                <label htmlFor={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    name="answer"
                    value={option.value}
                    checked={answers[currentQuestionIndex] === option.value}
                    onChange={() => handleAnswerSelect(option.value)}
                  />
                  {option.label}
                </label>
              </div>
            ))
          ) : (
            <label htmlFor="name">
              <input
                id="name"
                type="text"
                minLength="4"
                maxLength="12"
                value={state.name}
                onChange={handleNameChange}
              />
            </label>
          )}
        </div>
        <div className="questionnaire--buttons">
          {currentQuestionIndex > 0 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>{" "}
      {showResult && result}
    </div>
  );
};

export default Questionnaire;
