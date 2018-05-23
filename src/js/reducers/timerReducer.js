var gameTime = 1000 * 60 * 2; //in ms


const initialState = {
  startedAt: 0,
  stoppedAt: 0,
  baseTime: gameTime
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_TIMER":
      return {
        ...state,
        baseTime: gameTime,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };
    case "START_TIMER":
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };
    case "STOP_TIMER":
      if(state.stoppedAt === undefined)
        return {
          ...state,
          stoppedAt: action.now
        }
    default:
      return state;
  }
}

