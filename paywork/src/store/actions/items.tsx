import { Item, ItemsTypes } from '../../types';

export const addItem = (content: string) => ({
  type: ItemsTypes.ADD_ITEM,
  payload: {
    content,
  },
});

export const toggleItem = (id: number) => ({
  type: ItemsTypes.TOGGLE_ITEM,
  payload: {
    id,
  },
});

export const toggleEditItem = (id: number) => ({
  type: ItemsTypes.TOGGLE_EDIT_ITEM,
  payload: {
    id,
  },
});

export const updateItem = (id: number, content: string) => ({
  type: ItemsTypes.UPDATE_ITEM,
  payload: {
    id,
    content,
  },
});

export const removeItem = (id: number) => ({
  type: ItemsTypes.REMOVE_ITEM,
  payload: {
    id,
  },
});

export const loadRequest = () => ({
  type: ItemsTypes.LOAD_REQUEST,
});

export const loadSuccess = (data: Item[]) => ({
  type: ItemsTypes.LOAD_SUCCESS,
  data,
});

export const loadFailure = () => ({
  type: ItemsTypes.LOAD_FAILURE,
});