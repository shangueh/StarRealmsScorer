const initialState = { logGames: [] };

function playersLogs(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "ADD_TO_LOG":
      nextState = {
        ...state,
        logGames: [...state.logGames, action.value]
      };
      return nextState;
    case "RESET_LOG":
      return initialState;
    default:
      return state;
  }
}

export default playersLogs;
