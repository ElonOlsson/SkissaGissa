
const initialState = {
  word: "Currently no word fetched...",
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_WORD":
      return {
        ...state,
        fetching: true
      };

    case "FETCH_WORD_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case "FETCH_WORD_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        word: action.word
      };
    }
    default:
      return state;
  }
  
}

