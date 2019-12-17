import { createStore } from "redux";
import { combineReducers } from "redux";
import playersLogs from "./Reducers/logReducer";
import settingGames from "./Reducers/settingReducer";

export default createStore(
  combineReducers({
    playersLogs,
    settingGames
  })
);
