import React, { useEffect, useReducer, useState } from "react";
import "./Form.css";
import { INITIAL_STATE, formInputReducer } from "../../util/formReducer";

const Form = ({ formData, setFormData, data, page, handleSubmitForm }) => {
  // console.log("data in form", data);
  // // console.log("data in form for this page", data[page]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [state, dispatch] = useReducer(formInputReducer, INITIAL_STATE);
  const { score, name } = state;

  const handleChangeAnswer = (e) => {
    const { value } = e.target;
    setSelectedAnswer(value);
    // now we change our data list to have our selected answer for each question
    const updatedQuestions = [...data];
    updatedQuestions[page].answer = value;
    console.log("id of the answer selected:", e.target.id);
  };

  const handleChangeName = (e) => {
    dispatch({ type: "GET_NAME", name: e.target.value });
    setFormData({ ...state });
  };

  const handleSubmit = () => {
    handleSubmitForm(data);
  };

  useEffect(() => {
    // setFormData({ score, name });
    console.log("score:", score);
    console.log("name:", name);
    // console.log(formData);
  }, [score, name]);

  // trigger a dispatch everytime  a box is ticked on the same page
  //and rewrite reducer to reflect the trigger should not add on to previous state if we picked a new answer before clicking next

  return (
    <form className="quizzForm" onSubmit={handleSubmit}>
      {data[page] ? (
        <div className="answers">
          {data[page].answers.map((option, index) => (
            <div key={index}>
              <label htmlFor={(index + 1).toString()} className="container">
                {option}
                <input
                  type="radio"
                  id={(index + 1).toString()}
                  name="answer"
                  value={(index + 1).toString()}
                  onChange={handleChangeAnswer}
                  checked={selectedAnswer === (index + 1).toString()}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      ) : (
        <div className="inputName ">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength="4"
              maxLength="12"
              size="18"
              onChange={handleChangeName}
            />
          </label>
        </div>
      )}
    </form>
  );
};

export default Form;
