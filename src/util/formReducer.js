export const INITIAL_STATE = {
  score: 0,
  name: "",
};

const calculateScore = (questions, state) => {
  questions.forEach((question) => {
    if (question.answer === "1") {
      // state.score should increase by 1
      return {
        ...state,
        score: state.score + 1,
      };
    } else if (question.answer === "2") {
      // state.score should increase by 2
      return {
        ...state,
        score: state.score + 2,
      };
    } else if (question.answer === "3") {
      // state.score should increase by 3
      return (state) => ({
        ...state,
        score: state.score + 3,
      });
    } else if (question.answer === "4") {
      // state.score should increase by 4
      return {
        ...state,
        score: state.score + 4,
      };
    }
  });
};

// change this f to take in updated question[] see which answer it is and compile a score
// const mapAnswerTypeToStateFn = {
//   1: (state) => ({
//     ...state,
//     score: state.score + 1,
//   }),
//   2: (state) => ({
//     ...state,
//     score: state.score + 2,
//   }),
//   3: (state) => ({
//     ...state,
//     score: state.score + 3,
//   }),
//   4: (state) => ({
//     ...state,
//     score: state.score + 4,
//   }),
// };
//"GET_ANSWER" will be changed to GET_SCORE and will be called on submit GET_NAME can remain on change
export const formInputReducer = (state, action) => {
  switch (action.type) {
    case "GET_SCORE":
      return action.questions ? calculateScore(action.questions, state) : state;

    // const stateFn = mapAnswerTypeToStateFn[action.id];
    // return stateFn ? stateFn(state) : state;

    case "GET_NAME":
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};
