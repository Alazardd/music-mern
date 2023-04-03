import { all, fork } from "redux-saga/effects";
import songSaga from "../sagas/songSaga";

export default function* rootSaga() {
  yield all([fork(songSaga)]);
}
