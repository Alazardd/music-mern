import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsError,
  addSong,
  addSongSuccess,
  addSongError,
  updateSong,
  updateSongSuccess,
  updateSongError,
  deleteSong,
  deleteSongSuccess,
  deleteSongError,
  fetchStatistics,
  fetchStatisticsSuccess,
  fetchStatisticsError,
} from "../actions/songActions";
import { updateStatistics } from "../actions/songActions";

const API_URL = "http://localhost:5000/api";

function* fetchSongsSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/songs`);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsError(error.message));
  }
}

function* addSongSaga(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/songs`, action.payload);
    yield put(addSongSuccess(response.data));
    yield put(updateStatistics());
  } catch (error) {
    yield put(addSongError(error.message));
  }
}

function* updateSongSaga(action) {
  try {
    const response = yield call(
      axios.put,
      `${API_URL}/songs/${action.payload.id}`,
      action.payload
    );
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongError(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/songs/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
    yield put(updateStatistics());
  } catch (error) {
    yield put(deleteSongError(error.message));
  }
}

function* fetchStatisticsSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/statistics`);
    yield put(fetchStatisticsSuccess(response.data));
  } catch (error) {
    yield put(fetchStatisticsError(error.message));
  }
}

export default function* songSaga() {
  yield takeLatest(fetchSongs.type, fetchSongsSaga);
  yield takeLatest(addSong.type, addSongSaga);
  yield takeLatest(updateSong.type, updateSongSaga);
  yield takeLatest(deleteSong.type, deleteSongSaga);
  yield takeLatest(fetchStatistics.type, fetchStatisticsSaga);
}
