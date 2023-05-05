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

    case "GET_NAME":
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};
