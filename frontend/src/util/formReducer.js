import { resultCategories } from "./data.js";

export const initialState = {
  score: 0,
  name: "",
  answers: [],
  currentQuestionIndex: 0,
  result: {
    image: "",
    title: "",
    description: "",
  },
};

export const formReducer = (state, action) => {
  let answers; // Declare answers outside the switch block
  let score;
  switch (action.type) {
    case "SELECT_ANSWER":
      answers = [...state.answers];
      answers[state.currentQuestionIndex] = action.payload;
      return { ...state, answers };
    case "NEXT_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case "PREV_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "CALCULATE_SCORE":
      score = state.answers.reduce((acc, val) => {
        switch (val) {
          case "option1":
            return acc + 1;
          case "option2":
            return acc + 2;
          case "option3":
            return acc + 3;
          case "option4":
            return acc + 4;
          default:
            return acc;
        }
      }, 0);
      return { ...state, score };
    case "GET_RESULT":
      switch (true) {
        case state.score > 0 && state.score <= 10:
          return {
            ...state,
            result: {
              ...resultCategories[0],
            },
          };
        case state.score > 10 && state.score <= 20:
          return {
            ...state,
            result: {
              ...resultCategories[1],
            },
          };
        case state.score > 20 && state.score <= 30:
          return {
            ...state,
            result: {
              ...resultCategories[2],
            },
          };
        case state.score > 10 && state.score <= 40:
          return {
            ...state,
            result: {
              ...resultCategories[3],
            },
          };
        default:
          return { ...state };
      }

    default:
      throw new Error();
  }
};
