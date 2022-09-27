import { SHUFFLE } from "../constant";
import DeckInfo from "./Deck.json";

const initialState = {
  deckInfo: {},
  deckErr: "",
  deckResponseSuccess: false,
};

export default function shuffleReducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE.SUCCESS:
      return {
        ...state,
        deckInfo: action.payload,
        deckErr: "",
        deckResponseSuccess: true,
      };
    case SHUFFLE.FAILURE:
      return {
        ...state,
        deckInfo: DeckInfo,
        deckErr: action.payload,
        deckResponseSuccess: false,
      };
    default:
      return state;
  }
}
