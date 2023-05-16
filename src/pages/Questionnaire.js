import React, { useReducer, useState } from "react";
import "./Questionnaire.css";
import p1 from "../assets/1.gif";
import p2 from "../assets/2.gif";
import p3 from "../assets/3.gif";
import p4 from "../assets/4.gif";

import { initialState, formReducer } from "../util/formReducer";
const questions = [
  {
    question:
      "Someone accidentally bumps into you on the street, what would be your reaction?",
    options: [
      { value: "option1", label: " Do nothing." },
      { value: "option2", label: " Roll your eyes at them." },
      {
        value: "option3",
        label: " Yell 'What's your problem?'.",
      },
      { value: "option4", label: " Shove them back." },
    ],
  },
  {
    question:
      "Would you potentially kill your enemy if you could get away with it?",
    options: [
      {
        value: "option1",
        label: " No way! That's just wrong.",
      },
      { value: "option2", label: " I'd fantasize about it." },
      { value: "option3", label: " Potentially..." },
      { value: "option4", label: " YES." },
    ],
  },
  {
    question:
      "You're sitting on the pavement when a line of ants comes towards you, what do you do?",
    options: [
      {
        value: "option1",
        label: " You move out of the way so they can get safely to their hill.",
      },
      { value: "option2", label: " You do nothing." },
      {
        value: "option3",
        label: " You dump water on them just for fun.",
      },
      { value: "option4", label: " You squish them." },
    ],
  },
  {
    question: "What's your opinion on fire?",
    options: [
      {
        value: "option1",
        label: " I know better not to go near it.",
      },
      { value: "option2", label: " I'm afraid of it." },
      { value: "option3", label: " I'm fascinated by it." },
      { value: "option4", label: " I'm neutral about it." },
    ],
  },
  {
    question: "How often do you socialize?",
    options: [
      { value: "option1", label: " Maybe once a week." },
      { value: "option2", label: " Never, I'm a loner." },
      {
        value: "option3",
        label: " All the time! Almost every day.",
      },
      {
        value: "option4",
        label: " Maybe a few times a week.",
      },
    ],
  },
  {
    question: "How many hours per day do you spend on the computer?",
    options: [
      { value: "option1", label: " 4-5." },
      { value: "option2", label: " 6+." },
      { value: "option3", label: " 0-1." },
      { value: "option4", label: " 2-3." },
    ],
  },
  {
    question: "Your kitchen sink is clogged, what do you do?",
    options: [
      {
        value: "option1",
        label: " I'm the only one around here who can do this job.",
      },
      {
        value: "option2",
        label:
          " Not a pretty job but maybe i'll find some cool thing for my jar collection.",
      },
      {
        value: "option3",
        label: " No need for gloves I love the squishy feeling.",
      },
      {
        value: "option4",
        label: " Convince someone else to do it.",
      },
    ],
  },
  {
    question:
      "Have you ever used physical violence on another human because you were angry?",
    options: [
      { value: "option1", label: " No, never." },
      { value: "option2", label: " Maybe when I was a kid." },
      { value: "option3", label: " Only when justified." },
      { value: "option4", label: " Yes." },
    ],
  },
  {
    question: "If you had to kill someone, what weapon would you use?",
    options: [
      { value: "option1", label: " Poison." },
      { value: "option2", label: " A gun." },
      { value: "option3", label: " A knife." },
      { value: "option4", label: " A chainsaw." },
    ],
  },
  {
    question: "Which description you feel fits you most?",
    options: [
      {
        value: "option1",
        label: " I'm kind and romantic, I like rules and satisfying routines.",
      },
      {
        value: "option2",
        label:
          " What I lack in social skills I make up in creativity and curiosity.",
      },
      {
        value: "option3",
        label: " Class clown. The party don't start until I arrive.",
      },
      {
        value: "option4",
        label: " Have clear goals, focused, disciplined and organised.",
      },
    ],
  },
  {
    question: "What is your name?",
    input: true,
  },
];

let resultCategories = [
  {
    img: p1,
    title: "Norman Bates",
    description:
      "You're kind and thoughtfull , but everyone has it's limits. you're always one bad day away from stabbing your mom and wearing her clothes around the house. Advice? try meditation.",
  },
  {
    img: p2,
    title: "Jeffrey Dahmer",
    description:
      "You are a natural introvert and enjoy many hobbies but go through a bad breakup or get drunkenly rejected and you too can start your very own collection of pickled people.",
  },
  {
    img: p3,
    title: "Charles Manson",
    description:
      "You are the life of the party, charming and with a great sense of humour, but if your ego goes unchecked you're one friend away from starting your own death cult.",
  },
  {
    img: p4,
    title: "Patrick Bateman",
    description:
      "You are ambitous, charming and take great pride in your apearance but if you don't learn to take yourself less seriously you're one poorly chosen font style away from giving your work mate an axe haircut.",
  },
];

const Questionnaire = () => {
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
    console.log(`Name: ${state.name}, Score: ${state.score}`);
    setShowResult(true);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // const result = (
  //   <div className="resultBox">
  //     <img
  //       className="result-img"
  //       src={
  //         "https://media.istockphoto.com/photos/murder-kill-and-people-concept-criminal-or-murderer-wearing-a-mask-in-picture-id1146265183?k=6&m=1146265183&s=612x612&w=0&h=z8Qwv-MP3ygKNsWH-bJEihi63AUjyqYYeER5TSR1sMU="
  //       }
  //       alt="result"
  //     />
  //     <h2>Test result</h2>
  //     <p>Test description</p>
  //   </div>
  // );

  return (
    <div className="questionnaire">
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
      {showResult && "Result here"}
    </div>
  );
};

export default Questionnaire;
