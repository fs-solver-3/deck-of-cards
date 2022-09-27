import { combineReducers } from "redux";
import shuffleReducer from "./shuffle/reducer";
import drawCardsReducer from "./drawCards/reducer";

const rootReducer = combineReducers({
  deck: shuffleReducer,
  drawCards: drawCardsReducer,
});

export default rootReducer;
