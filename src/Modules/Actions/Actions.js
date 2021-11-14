import {
  REQUESTED_FETCH_LIST,
  SUCCESS_FETCH_LIST,
  FAILURE_FETCH_LIST,
  GET_TABLE_COLUMNS,
  UPDATE_TABLE_COLUMNS,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_FILTERING,
  REQUESTED_ADD_CART,
  SUCCESS_ADD_CART,
  FAILURE_ADD_CART,
  REQUESTED_DELETE_CART,
  SUCCESS_DELETE_CART,
  FAILURE_DELETE_CART,
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

export const showModal = (props) => ({
  type: OPEN_MODAL,
  props,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const getFiltering = (index) => ({
  type: GET_FILTERING,
  index,
});

export const requestedAddCart = (data) => ({
  type: REQUESTED_ADD_CART,
  data,
});

export const successAddCart = (data) => ({
  type: SUCCESS_ADD_CART,
  data,
});

export const failureAddCart = (error) => ({
  type: FAILURE_ADD_CART,
  error,
});

export const requestedDeleteCart = (id) => ({
  type: REQUESTED_DELETE_CART,
  id,
});

export const successDeleteCart = (id) => ({
  type: SUCCESS_DELETE_CART,
  id,
});

export const failureDeleteCart = (error) => ({
  type: FAILURE_DELETE_CART,
  error,
});
