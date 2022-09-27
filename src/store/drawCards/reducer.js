import { DRAW_CARDS } from "../constant";
import DrawCardsInfo from "./DrawCards.json";

const initialState = {
  drawCardsInfo: {},
  drawCardsHistory: [],
  err: "",
  drawCardsResponseSuccess: false,
  snapValueCount: 0,
  snapSuitCount: 0,
  matchSnapValue: false,
  matchSnapSuit: false,
};

export default function drawCardsReducer(state = initialState, action) {
  switch (action.type) {
    case DRAW_CARDS.SUCCESS:
      let updatedSnapValueCount = 0;
      let updatedSnapSuitCount = 0;
      let updatedMatchSnapValue = false;
      let updatedMatchSnapSuit = false;
      const newHistory = [...state.drawCardsHistory, ...action.payload?.cards];

      const prevCard = newHistory[newHistory.length - 2];
      const currentCard = newHistory[newHistory.length - 1];
      if (currentCard !== undefined && prevCard !== undefined) {
        if (currentCard?.value === prevCard?.value) {
          updatedMatchSnapValue = true;
          updatedSnapValueCount = parseInt(state.snapValueCount) + 1;
        } else {
          updatedSnapValueCount = parseInt(state.snapValueCount);
        }
        if (currentCard?.suit === prevCard?.suit) {
          updatedMatchSnapSuit = true;
          updatedSnapSuitCount = parseInt(state.snapSuitCount) + 1;
        } else {
          updatedSnapSuitCount = parseInt(state.snapSuitCount);
        }
      }

      return {
        ...state,
        drawCardsInfo: action.payload,
        drawCardsHistory: newHistory,
        err: "",
        drawCardsResponseSuccess: true,
        snapValueCount: updatedSnapValueCount,
        snapSuitCount: updatedSnapSuitCount,
        matchSnapValue: updatedMatchSnapValue,
        matchSnapSuit: updatedMatchSnapSuit,
      };
    case DRAW_CARDS.FAILURE:
      return {
        ...state,
        drawCardsInfo: DrawCardsInfo,
        err: action.payload,
        drawCardsResponseSuccess: false,
      };
    // case DRAW_CARDS.SNAP_VALUE:
    //   return {
    //     ...state,
    //     snapValueCount: state.snapValueCount + 1,
    //   };
    // case DRAW_CARDS.SNAP_SUIT:
    //   return {
    //     ...state,
    //     snapSuitCount: state.snapSuitCount + 1,
    //   };

    default:
      return state;
  }
}
