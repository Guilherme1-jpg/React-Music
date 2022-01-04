import songsReducer from "./songsReducer";
import playerReducer from "./playerReducer";

import { combineReducers } from "react-redux";

export const mainReducer = combineReducers({
  songs: songsReducer,
  player: playerReducer,
});
