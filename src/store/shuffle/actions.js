import { createAction } from "../hooks";
import { SHUFFLE } from "../constant";

export const shuffleAction = {
  shuffleRequest: () => createAction(SHUFFLE.REQUEST, {}),
  shuffleSuccess: (deckInfo) => createAction(SHUFFLE.SUCCESS, { ...deckInfo }),
  shuffleFailure: (error) => createAction(SHUFFLE.FAILURE, error),
};
