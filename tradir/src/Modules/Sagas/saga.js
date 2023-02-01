import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  successFetchList,
  failureFetchList,
  successAddCart,
  failureAddCart,
  successDeleteCart,
  failureDeleteCart,
} from "../Actions/Actions";
import {
  REQUESTED_FETCH_LIST,
  REQUESTED_ADD_CART,
  REQUESTED_DELETE_CART,
} from "../types";

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

export function* addCart(action) {
  const { payload } = action;
  try {
    yield put(successAddCart(payload));
  } catch (error) {
    yield put(failureAddCart());
    console.log(error);
  }
}

export function* deleteCart(action) {
  const { id } = action;
  try {
    yield put(successDeleteCart(id));
  } catch (error) {
    yield put(failureDeleteCart());
    console.log(error);
  }
}

export function* cartList() {
  yield takeLatest(REQUESTED_ADD_CART, addCart);
  yield takeLatest(REQUESTED_DELETE_CART, deleteCart);
}
