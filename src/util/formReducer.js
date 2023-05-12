export const initialState = {
  score: 0,
  name: "",
  answers: [],
  currentQuestionIndex: 0,
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
    default:
      throw new Error();
  }
};
