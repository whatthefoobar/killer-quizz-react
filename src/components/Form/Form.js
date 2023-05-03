import React, { useEffect, useReducer } from "react";

import "./Form.css";
import { INITIAL_STATE, formInputReducer } from "../../util/formReducer";
// import { formActions } from "../../store/formSlice";
// import { useDispatch, useSelector } from "react-redux";

const Form = ({ formData, setFormData, answers }) => {
  const [state, dispatch] = useReducer(formInputReducer, INITIAL_STATE);
  const { score, name } = state;

  const handleChangeAnswer = (e) => {
    console.log(e.target.id);
    dispatch({ type: "GET_ANSWER", id: e.target.id });
    setFormData({ ...state });
  };
  const handleChangeName = (e) => {
    dispatch({ type: "GET_NAME", name: e.target.value });
    setFormData({ ...state });
  };

  useEffect(() => {
    setFormData({ score, name });
    console.log(score);
    console.log(name);
    console.log(formData);
  }, [score, name]);

  return (
    <form className="quizzForm">
      {answers ? (
        <div className="answers">
          <label htmlFor="a1" className="container">
            {answers?.answers[0]}
            <input
              type="radio"
              id="a1"
              name="answer"
              value={answers?.answers[0]}
              onChange={handleChangeAnswer}
            />
            <span className="checkmark"></span>
          </label>
          <label htmlFor="a2" className="container">
            {answers?.answers[1]}
            <input
              type="radio"
              id="a2"
              name="answer"
              value={answers?.answers[1]}
              onChange={handleChangeAnswer}
            />
            <span className="checkmark"></span>
          </label>
          <label htmlFor="a3" className="container">
            {answers?.answers[2]}
            <input
              type="radio"
              id="a3"
              name="answer"
              value={answers?.answers[2]}
              onChange={handleChangeAnswer}
            />
            <span className="checkmark"></span>
          </label>
          <label htmlFor="a4" className="container">
            {answers?.answers[3]}
            <input
              type="radio"
              id="a4"
              name="answer"
              value={answers?.answers[3]}
              onChange={handleChangeAnswer}
            />
            <span className="checkmark"></span>
          </label>
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
