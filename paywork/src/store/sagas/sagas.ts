import { call, put } from 'redux-saga/effects';
import todoApi from 'api/todoApi';
import { TodoListActionTypes } from '../../types';
import { loadFailure, loadSuccess } from '../actions/items';

export function* load() {
  try {
    const { data } = yield call(todoApi.get, 'http://localhost:3000/items');
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* deleteRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(todoApi.delete, `http://localhost:3000/items/${payload.id}`);
  } catch (error) {
    console.log('DELETE ERROR');
  }
}