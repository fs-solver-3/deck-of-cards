import { createAction } from "../hooks";
import { DRAW_CARDS } from "../constant";

export const drawCardsAction = {
  drawCardsRequest: (deck_id) => createAction(DRAW_CARDS.REQUEST, { deck_id }),
  drawCardsSuccess: (drawCardsInfo) =>
    createAction(DRAW_CARDS.SUCCESS, { ...drawCardsInfo }),
  drawCardsFailure: (error) => createAction(DRAW_CARDS.FAILURE, error),
  snapValueIncrease: () => createAction(DRAW_CARDS.SNAP_VALUE),
  snapSuitIncrease: () => createAction(DRAW_CARDS.SNAP_SUIT),
};
