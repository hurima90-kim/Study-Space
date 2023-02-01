import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import columnsReducer from "./Reducers/Reducers";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";
import { fetchBeerList } from "./Sagas/saga";

enableES5();

const rootReducer = combineReducers({ columnsReducer });

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([fetchBeerList()]);
}
