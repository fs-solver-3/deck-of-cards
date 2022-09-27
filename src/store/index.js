import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// const initialState = {}
// const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))

// export default function configureStore(initialState) {
//   const sagaMiddleware = createSagaMiddleware();
//   return {
//     ...createStore(reducer, initialState, applyMiddleware(sagaMiddleware)),
//     runSaga: sagaMiddleware.run,
//   };
// }

// const store = configureStore();
// store.runSaga(rootSaga);

sagaMiddleware.run(rootSaga);
export default store;
