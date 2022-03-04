import homeSaga from "./saga/home/homeSaga";
import { all } from "redux-saga/effects";
import customerSaga from "./saga/customer/customerSaga";


export default function* rootSaga() {
    yield all([...homeSaga, ...customerSaga])
  }