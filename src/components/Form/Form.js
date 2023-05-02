import React from "react";

const Form = ({ formData, setFormData, answers }) => {
  return (
    <form className="quizzForm">
      {answers ? (
        <div className="answers">
          <div className="answer">
            <input type="radio" id="a1" name="answer" value="answer 1" />
            <label htmlFor="a1" className="answer1">
              {answers?.answers[0]}
            </label>
          </div>
          <div className="answer">
            <input type="radio" id="a2" name="answer" value="answer 2" />
            <label htmlFor="a2" className="answer2">
              {answers?.answers[1]}
            </label>
          </div>
          <div className="answer">
            <input type="radio" id="a3" name="answer" value="answer 3" />
            <label htmlFor="a3" className="answer3">
              {answers?.answers[2]}
            </label>
          </div>
          <div className="answer">
            <input type="radio" id="a4" name="answer" value="answer 4" />
            <label htmlFor="a4" className="answer4">
              {answers?.answers[3]}
            </label>
          </div>
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
          />
        </div>
      )}
    </form>
  );
};

export default Form;
