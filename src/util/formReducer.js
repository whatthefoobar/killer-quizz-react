export const INITIAL_STATE = {
  score: 0,
  name: "",
};

const mapAnswerTypeToStateFn = {
  a1: (state) => ({
    ...state,
    score: state.score + 1,
  }),
  a2: (state) => ({
    ...state,
    score: state.score + 2,
  }),
  a3: (state) => ({
    ...state,
    score: state.score + 3,
  }),
  a4: (state) => ({
    ...state,
    score: state.score + 4,
  }),
};

export const formInputReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANSWER":
      const stateFn = mapAnswerTypeToStateFn[action.id];
      return stateFn ? stateFn(state) : state;
    // {
    //   // let answerType = action.id;
    //   // if (answerType === "a1") {
    //   //   let prevState = state.score;
    //   //   let newScore = prevState + 1;
    //   //   return {
    //   //     ...state,
    //   //     score: newScore,
    //   //   };
    //   // } else if (answerType === "a2") {
    //   //   let prevState = state.score;
    //   //   let newScore = prevState + 2;
    //   //   return {
    //   //     ...state,
    //   //     score: newScore,
    //   //   };
    //   // } else if (answerType === "a3") {
    //   //   let prevState = state.score;
    //   //   let newScore = prevState + 3;
    //   //   return {
    //   //     ...state,
    //   //     score: newScore,
    //   //   };
    //   // } else {
    //   //   let prevState = state.score;
    //   //   let newScore = prevState + 4;
    //   //   return {
    //   //     ...state,
    //   //     score: newScore,
    //   //   };
    //   // }
    // }
    case "GET_NAME":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
