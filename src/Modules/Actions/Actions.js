import {
  REQUESTED_FETCH_LIST,
  SUCCESS_FETCH_LIST,
  FAILURE_FETCH_LIST,
  GET_TABLE_COLUMNS,
  UPDATE_TABLE_COLUMNS,
} from "../types";

export const requestedFetchList = () => ({
  type: REQUESTED_FETCH_LIST,
});

export const successFetchList = (beerList) => ({
  type: SUCCESS_FETCH_LIST,
  beerList,
});

export const failureFetchList = (error) => ({
  type: FAILURE_FETCH_LIST,
  error,
});

export const getTableColumns = () => ({
  type: GET_TABLE_COLUMNS,
});

export const updateTableColumns = (columns) => ({
  type: UPDATE_TABLE_COLUMNS,
  columns,
});
