import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Form.css";

const Form = ({ formData, setFormData, answers }) => {
  const [score, setScore] = useState(0);

  const getAnswer = (e) => {
    console.log("is checked?", e.target.checked);
    console.log("id:", e.target.id);
    if (e.target.checked) {
      if (e.target.id === "a1") {
        setScore((score) => score + 1);
      } else if (e.target.id === "a2") {
        setScore((score) => score + 2);
      } else if (e.target.id === "a3") {
        setScore((score) => score + 3);
      } else setScore((score) => score + 4);
    }
    setFormData({ ...formData, score: score });
  };

  //   const checkAnswer = () => {
  //     let a1 = answer1.current.checked;
  //     let a2 = answer2.current.checked;
  //     let a3 = answer3.current.checked;
  //     let a4 = answer4.current.checked;

  //     if (a1 === true) {
  //       setScore((prevScore) => prevScore + 1);
  //     } else if (a2 === true) {
  //       setScore((prevScore) => prevScore + 2);

  //       //   setFormData({ ...formData, score: (score) => score + 2 });
  //     } else if (a3 === true) {
  //       setScore((prevScore) => prevScore + 3);

  //       //   setFormData({ ...formData, score: (score) => score + 3 });
  //     } else if (a4 === true) {
  //       setScore((prevScore) => prevScore + 4);

  //       //   setFormData({ ...formData, score: (score) => score + 4 });
  //     } else return score;
  //   };

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
              onChange={getAnswer}
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
              onChange={getAnswer}
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
              onChange={getAnswer}
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
              onChange={getAnswer}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      ) : (
        <div className="inputName ">
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="4"
            maxLength="12"
            size="18"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        </div>
      )}
    </form>
  );
};

export default Form;
