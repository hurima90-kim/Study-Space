import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  requestedFetchList,
  successFetchList,
  failureFetchList,
} from "../Actions/Actions";
import { REQUESTED_FETCH_LIST } from "../types";

export function* fetchData() {
  try {
    const response = yield axios.get("https://api.punkapi.com/v2/beers");
    yield put(successFetchList(response.data));
  } catch (error) {
    console.error(error);
    yield put(failureFetchList(error));
  }
}

export function* fetchBeerList() {
  yield takeLatest(REQUESTED_FETCH_LIST, fetchData);
}
