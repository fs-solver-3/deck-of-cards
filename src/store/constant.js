// export const API_HOST = "http://127.0.0.1:8000/api/deck/";
export const API_HOST = "https://deckofcardsapi.com/api/deck/";
export const NEW_SHUFFLE_KEY = "new/shuffle/?deck_count=1";
export const DRAW_CARDS_KEY = "/draw/?count=1";

export const SHUFFLE = {
  REQUEST: "SHUFFLE_REQUEST",
  SUCCESS: "SHUFFLE_SUCCESS",
  FAILURE: "SHUFFLE_FAILURE",
};

export const DRAW_CARDS = {
  REQUEST: "DRAW_CARDS_REQUEST",
  SUCCESS: "DRAW_CARDS_SUCCESS",
  FAILURE: "DRAW_CARDS_FAILURE",
  SNAP_VALUE: "DRAW_CARDS_SNAP_VALUE",
  SNAP_SUIT: "DRAW_CARDS_SNAP_SUIT",
};
