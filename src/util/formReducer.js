import { resultCategories } from "./data";
import p1 from "../assets/1.gif";
import p2 from "../assets/2.gif";
import p3 from "../assets/3.gif";
import p4 from "../assets/4.gif";

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
  switch (action.type) {
    case "SELECT_ANSWER":
      const answers = [...state.answers];
      answers[state.currentQuestionIndex] = action.payload;
      return { ...state, answers };
    case "NEXT_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case "PREV_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "CALCULATE_SCORE":
      const score = state.answers.reduce((acc, val) => {
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
    // case "GET_RESULT": f that grabs score n and returns an image text and description obj see example below
    case "GET_RESULT":
      switch (true) {
        case state.score > 0 && state.score <= 10:
          return {
            ...state,
            result: {
              image: p1,
              title: resultCategories[0].title,
              description: resultCategories[0].description,
            },
          };
        case state.score > 10 && state.score <= 20:
          return {
            ...state,
            result: {
              image: p2,
              title: resultCategories[1].title,
              description: resultCategories[1].description,
            },
          };
        case state.score > 20 && state.score <= 30:
          return {
            ...state,
            result: {
              image: p3,
              title: resultCategories[2].title,
              description: resultCategories[2].description,
            },
          };
        case state.score > 10 && state.score <= 40:
          return {
            ...state,
            result: {
              image: p4,
              title: resultCategories[3].title,
              description: resultCategories[3].description,
            },
          };
        default:
          return { ...state };
      }

    default:
      throw new Error();
  }
};
// case "GET_RESULT": f that grabs score n and returns an image text and description obj see example below
// const showResultCategory = (score) => {
//   if (score > 0 && score <= 10) {
//     return setResult({
//       image: p1,
//       title: resultCategories[0].title,
//       description: resultCategories[0].description,
//     });
//   } else if (score > 10 && score <= 20) {
//     return setResult({
//       image: p2,
//       title: resultCategories[1].title,
//       description: resultCategories[1].description,
//     });
//   } else if (score > 20 && score <= 30) {
//     return setResult({
//       image: p3,
//       title: resultCategories[2].title,
//       description: resultCategories[2].description,
//     });
//   } else if (score > 10 && score <= 40) {
//     return setResult({
//       image: p4,
//       title: resultCategories[3].title,
//       description: resultCategories[3].description,
//     });
//   }
// };
