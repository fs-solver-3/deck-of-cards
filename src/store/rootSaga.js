import { all, fork } from "redux-saga/effects";
import watchShuffleOperations from "./shuffle/saga";
import watchDrawCardsOperations from "./drawCards/saga";

export default function* rootSaga() {
  yield all([fork(watchShuffleOperations), fork(watchDrawCardsOperations)]);
}
