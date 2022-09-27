import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API_HOST, DRAW_CARDS_KEY, DRAW_CARDS } from "../constant";
import { drawCardsAction } from "./actions";

function* drawCardsRqeust(action) {
  try {
    const data = yield call(
      axios.get,
      `${API_HOST + action.payload.deck_id + DRAW_CARDS_KEY}`
    );
    if (data.data.success === true) {
      yield put(drawCardsAction.drawCardsSuccess(data.data));
    }
  } catch (err) {
    console.log(err.message);
    yield put(drawCardsAction.drawCardsFailure(err.message));
  }
}

export function* watchDrawCardsOperations() {
  yield all([takeEvery(DRAW_CARDS.REQUEST, drawCardsRqeust)]);
}

export default watchDrawCardsOperations;
