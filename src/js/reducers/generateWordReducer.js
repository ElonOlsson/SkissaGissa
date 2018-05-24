
const initialState = {
  word: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GENERATE_WORD":
      return {
        ...state,
        word: action.word
      };
    case "NEXT_WORD":
      return {
        ...state,
        word: state.word ? action.word : undefined
      };
    default:
      return state;
  }
}

