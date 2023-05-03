export const INITIAL_STATE = {
  score: 0,
  name: "",
};

export const formInputReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANSWER":
      let answerType = action.id;
      if (answerType === "a1") {
        let prevState = state.score;
        let newScore = prevState + 1;
        return {
          ...state,
          score: newScore,
        };
      } else if (answerType === "a2") {
        let prevState = state.score;
        let newScore = prevState + 2;
        return {
          ...state,
          score: newScore,
        };
      } else if (answerType === "a3") {
        let prevState = state.score;
        let newScore = prevState + 3;
        return {
          ...state,
          score: newScore,
        };
      } else {
        let prevState = state.score;
        let newScore = prevState + 4;
        return {
          ...state,
          score: newScore,
        };
      }

    case "GET_NAME":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
