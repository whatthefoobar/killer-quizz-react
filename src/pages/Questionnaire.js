import React, { useReducer } from "react";
import "./Questionnaire.css";

import { initialState, formReducer } from "../util/formReducer";

const Questionnaire = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { currentQuestionIndex, answers } = state;

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
    console.log(`Name: ${state.name}, Score: ${state.score}`);
  };

  const questions = [
    {
      question: "Question 1",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ],
    },
    {
      question: "Question 2",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ],
    },
    {
      question: "Question 3",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ],
    },
    {
      question: "Question 4",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ],
    },
    {
      question: "What is your name?",
      input: true,
    },
  ];
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questionnaire">
      {/* <h1>Questionnaire</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="questionnaire--qna">
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.input ? (
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
          ) : (
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
    </div>
  );
};

export default Questionnaire;
