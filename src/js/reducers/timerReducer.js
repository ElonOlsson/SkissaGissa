
// Initial state for reducer
const initialState = {
  isOn: false,
  time: 0,
};

export default function timerReducer(state=initialState, action){
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...initialState,
        isOn: true,
        offset: action.offset,
      };
    
    case 'STOP_TIMER':
      return {
        ...state,
        isOn: false,
        time: state.time,
      };
      
    case 'TICK':
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time
      };

    default: 
      return state;
  }
}
