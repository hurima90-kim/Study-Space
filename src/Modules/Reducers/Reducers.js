import {
  REQUESTED_FETCH_LIST,
  SUCCESS_FETCH_LIST,
  FAILURE_FETCH_LIST,
  GET_TABLE_COLUMNS,
  UPDATE_TABLE_COLUMNS,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_FILTERING,
  SUCCESS_ADD_CART,
  FAILURE_ADD_CART,
  SUCCESS_DELETE_CART,
  FAILURE_DELETE_CART,
} from "../types";

const initialState = {
  beerList: [],
  filterBeerList: [],
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
    { title: "ABV", field: "abv" },
    { title: "IBU", field: "ibu" },
    { title: "SRM", field: "srm" },
    { title: "PH", field: "ph" },
    { title: "First Brewed", field: "first_brewed" },
  ],
  detail: false,
  props: [],
  cartList: [],
};

const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    // 데이터 리스트
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

    // 테이블 헤더
    case GET_TABLE_COLUMNS:
      return {
        ...state,
      };
    case UPDATE_TABLE_COLUMNS:
      return {
        ...state,
        columns: action.columns,
      };

    // 모달창
    case OPEN_MODAL:
      return {
        ...state,
        detail: true,
        props: action.props,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        detail: false,
        props: [],
      };

    // 필터링
    case GET_FILTERING:
      if (action.index) {
        let min = Math.min(Number(action.index));
        let max = Math.max(Number(action.index));
        return {
          ...state,
          filterBeerList: state.beerList.filter(
            (beer) => beer.abv >= min && beer.abv <= max + 1
          ),
        };
      } else {
        return {
          ...state,
          filterBeerList: [],
        };
      }

    // 장바구니
    case SUCCESS_ADD_CART:
      return {
        ...state,
        cartList: state.cartList.concat(action.payload),
      };
    case FAILURE_ADD_CART:
      return {
        ...state,
        error: action.error,
      };
    case SUCCESS_DELETE_CART:
      return {
        cartList: state.cartList.filter((item) => item.id !== action.id),
      };
    case FAILURE_DELETE_CART:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default columnsReducer;
