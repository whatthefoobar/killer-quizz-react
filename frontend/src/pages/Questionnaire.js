import React, { useEffect, useReducer, useState } from "react";
import "./Questionnaire.css";
import axios from "axios";
// import { questions } from "../util/data";

import { initialState, formReducer } from "../util/formReducer";

const Questionnaire = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { currentQuestionIndex, answers } = state;
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);

  const removeIdsFromArray = (array) => {
    // Extract the values from the object and remove the IDs
    const newArray = Object.values(array).map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });

    return newArray;
  };

  // now grab questions data not from util but from FB here
  useEffect(() => {
    axios
      .get("http://localhost:3000/data") // Replace with your server endpoint URL
      .then((response) => {
        setQuestions(removeIdsFromArray(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(questions);
  }, []);

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
    dispatch({ type: "GET_RESULT" });
    console.log(
      `Result: ${state.result.image}, ${state.result.title} ${state.result.description}`
    );
    console.log(`Name: ${state.name}, Score: ${state.score}`);
    if (state.name !== "") {
      postData({ name: state.name, score: state.score });
    }

    setShowResult(true);
  };

  const postData = async (data) => {
    const response = await fetch("http://localhost:3000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Data successfully pushed to the server!");
    } else {
      console.error("Failed to push data to the server.");
    }
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
      {questions.length > 0 && (
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
        </form>
      )}

      {showResult && result}
    </div>
  );
};

export default Questionnaire;
