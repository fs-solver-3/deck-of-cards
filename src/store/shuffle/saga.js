import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API_HOST, NEW_SHUFFLE_KEY, SHUFFLE } from "../constant";
import { shuffleAction } from "./actions";

function* shuffleRqeust() {
  try {
    const data = yield call(axios.get, `${API_HOST + NEW_SHUFFLE_KEY}`);
    if (data.data.success === true) {
      yield put(shuffleAction.shuffleSuccess(data.data));
    }
  } catch (err) {
    console.log(err.message);
    yield put(shuffleAction.shuffleFailure(err.message));
  }
}

export function* watchShuffleOperations() {
  yield all([takeEvery(SHUFFLE.REQUEST, shuffleRqeust)]);
}

export default watchShuffleOperations;
