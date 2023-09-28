import { useEffect, useReducer, useState } from "react";
import "./Questionnaire.css";
import axios from "axios";

import { initialState, formReducer } from "../util/formReducer";

const Questionnaire = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { currentQuestionIndex, answers } = state;
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeIdsFromArray = (array) => {
    // Extract the values from the object and remove the IDs
    const newArray = Object.values(array).map((obj) => {
      // eslint-disable-next-line no-unused-vars
      const { id, ...rest } = obj;
      return rest;
    });

    return newArray;
  };

  // now grab questions data not from util but from FB here
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/data`) // Replace with your server endpoint URL
      .then((response) => {
        setQuestions(removeIdsFromArray(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
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
    // console.log(
    //   `Result: ${state.result.image}, ${state.result.title} ${state.result.description}`
    // );
    // console.log(`Name: ${state.name}, Score: ${state.score}`);
    if (state.name !== "") {
      postData({ name: state.name, score: state.score });

      setShowResult(true);
    }
  };

  let result = (
    <div className="resultBox">
      <img className="result-img" src={state.result.img} alt="result" />
      <h2>{state.result.title}</h2>
      <p>{state.result.description}</p>
    </div>
  );

  const postData = async (data) => {
    try {
      const response = await axios.post(`/scores`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Data successfully pushed to the server!");
      } else {
        console.error("Failed to push data to the server.");
      }
    } catch (error) {
      console.error("An error occurred while sending the POST request:", error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questionnaire">
      {isLoading && <p>Loading...</p>}
      {questions.length > 0 && !showResult && (
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

      {showResult && state.name !== "" && result}
    </div>
  );
};

export default Questionnaire;
