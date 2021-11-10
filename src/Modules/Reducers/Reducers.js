import {
  REQUESTED_FETCH_LIST,
  SUCCESS_FETCH_LIST,
  FAILURE_FETCH_LIST,
  GET_TABLE_COLUMNS,
  UPDATE_TABLE_COLUMNS,
} from "../types";

const initialState = {
  beerList: [],
  columns: [
    {
      title: "Thumbnail",
      field: "image_Url",
      render: (rowData) => (
        <img
          src={rowData.image_url}
          style={{ width: 30, height: 100 }}
          alt="img"
        />
      ),
    },
    { title: "Name", field: "name" },
    { title: "Tagline", field: "tagline" },
    { title: "Abv", field: "abv" },
    { title: "First Brewed", field: "first_brewed" },
  ],
};

const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_FETCH_LIST:
      return {
        ...state,
      };
    case SUCCESS_FETCH_LIST:
      return {
        ...state,
        beerList: action.beerList,
      };
    case FAILURE_FETCH_LIST:
      return {
        ...state,
        error: action.error,
      };
    case GET_TABLE_COLUMNS:
      return {
        ...state,
      };
    case UPDATE_TABLE_COLUMNS:
      return {
        ...state,
        columns: action.columns,
      };
    default:
      return state;
  }
};

export default columnsReducer;
