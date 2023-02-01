import { ItemsState, ItemsTypes, TodoListActionTypes } from '../../types';

const initialState: ItemsState = {
  todoList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: TodoListActionTypes): ItemsState => {
  switch (action.type) {
    case ItemsTypes.ADD_ITEM:
      return {
        todoList: [
          ...state.todoList,
          {
            id: Math.random(),
            content: action.payload.content,
            editing: false,
            isCheck: false,
            createdAt: new Date().toISOString()
          },
        ],
      };

    case ItemsTypes.TOGGLE_ITEM:
      return {
        todoList: state.todoList.map((item) => ((item.id === action.payload.id)
          ? { ...item, isCheck: !item.isCheck }
          : item)),
      };

    case ItemsTypes.TOGGLE_EDIT_ITEM:
      return {
        todoList: state.todoList.map((item) => ((item.id === action.payload.id)
          ? { ...item, editing: !item.editing }
          : item)),
      };

    case ItemsTypes.UPDATE_ITEM:
      return {
        todoList: state.todoList.map((item) => ((item.id === action.payload.id)
          ? { ...item, content: action.payload.content }
          : item)),
      };

    case ItemsTypes.REMOVE_ITEM:
      return {
        todoList: state.todoList.filter((item) => item.id !== action.payload.id),
      };

    case ItemsTypes.LOAD_REQUEST:
      return { ...state };

    case ItemsTypes.LOAD_SUCCESS:
      return {
        todoList: action.todoList,
      };

    case ItemsTypes.LOAD_FAILURE:
      return {
        todoList: [],
      };

    default:
      return state;
  }
};