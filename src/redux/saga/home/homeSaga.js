import {
  loadHomesApi,
  addHomeApi,
  updateHomeApi,
  deleteHomeApi,
  loadHomeApi,
} from "../../api/home/api";
import {
  call,
  delay,
  fork,
  put,
  takeEvery,
  takeLatest,
  take,
} from "redux-saga/effects";
import {
  loadHomesError,
  loadHomesStart,
  loadHomesSuccess,
  addHomeError,
  addHomeStart,
  addHomeSuccess,
  updateHomeError,
  updateHomeStart,
  updateHomeSuccess,
  deleteHomeError,
  deleteHomeStart,
  deleteHomeSuccess,
  loadHomeSuccess,
  loadHomeStart,
  loadHomeError
} from "../../actions/home/actions";
import * as types from "../../actions/home/actionTypes";

function* onLoadHomesStartAsync({ payload }) {
  try {
    const response = yield call(loadHomesApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadHomesSuccess(response.data));
    }
  } catch (error) {
    yield put(loadHomesError(error.response.data));
  }
}

function* onLoadHomes() {
  yield takeEvery(types.LOAD_HOMES_START, onLoadHomesStartAsync);
}

function* onLoadHomeStartAsync({ payload }) {
  try {
    const response = yield call(loadHomeApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadHomeSuccess(response.data));
    }
  } catch (error) {
    yield put(loadHomeError(error.response.data));
  }
}

function* onLoadHome() {
  yield takeEvery(types.LOAD_HOME_START, onLoadHomeStartAsync);
}

// function add user

function* onAddHomeStartAsync({ payload }) {
  try {
    const response = yield call(addHomeApi, payload);
    if (response.status === 200) {
      yield put(addHomeSuccess(response.data));
    }
  } catch (error) {
    yield put(addHomeError(error.response.data));
  }
}

function* onAddHome() {
  yield takeLatest(types.ADD_HOME_START, onAddHomeStartAsync);
}

// function delete user
function* onDeleteHomeStartAsync({ payload }) {
  try {
    const response = yield call(deleteHomeApi, payload);
    if (response.status === 204) {
      yield delay(500);
      yield put(deleteHomeSuccess(payload));
    }
  } catch (error) {
    yield put(deleteHomeError(error.response.data));
  }
}

function* onDeleteHome() {
  // while (true) {
  //   const { payload } = yield take(types.DELETE_HOME_START);
  //   yield call(onDeleteHomeStartAsync, payload);
  // }

  yield takeEvery(types.DELETE_HOME_START, onDeleteHomeStartAsync);
}

// function update user
function* onUpdateHomeStartAsync({ payload: {homeId, home} }) {
  try {
    const response = yield call(updateHomeApi, homeId, home);
    if (response.status === 200) {
      yield put(updateHomeSuccess(response.data));
    }
  } catch (error) {
    yield put(updateHomeError(error.response.data));
  }
}

function* onUpdateHome() {
  yield takeLatest(types.UPDATE_HOME_START, onUpdateHomeStartAsync);
}

const homeSaga = [
  fork(onLoadHomes),
  fork(onAddHome),
  fork(onDeleteHome),
  fork(onUpdateHome),
  fork(onLoadHome)
];

export default homeSaga;
