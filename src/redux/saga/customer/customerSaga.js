import {
    loadCustomersApi,
    addCustomerApi,
    updateCustomerApi,
    deleteCustomerApi,
    loadCustomerApi,
  } from "../../api/customer/api";
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
    loadCustomersError,
    loadCustomersStart,
    loadCustomersSuccess,
    addCustomerError,
    addCustomerStart,
    addCustomerSuccess,
    updateCustomerError,
    updateCustomerStart,
    updateCustomerSuccess,
    deleteCustomerError,
    deleteCustomerStart,
    deleteCustomerSuccess,
    loadCustomerSuccess,
    loadCustomerStart,
    loadCustomerError
  } from "../../actions/customer/actions";
  import * as types from "../../actions/customer/actionTypes";
  
  function* onLoadCustomersStartAsync({ payload }) {
    try {
      const response = yield call(loadCustomersApi, payload);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadCustomersSuccess(response.data));
      }
    } catch (error) {
      yield put(loadCustomersError(error.response.data));
    }
  }
  
  function* onLoadCustomers() {
    yield takeEvery(types.LOAD_CUSTOMERS_START, onLoadCustomersStartAsync);
  }
  
  function* onLoadCustomerStartAsync({ payload }) {
    try {
      const response = yield call(loadCustomerApi, payload);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadCustomerSuccess(response.data));
      }
    } catch (error) {
      yield put(loadCustomerError(error.response.data));
    }
  }
  
  function* onLoadCustomer() {
    yield takeEvery(types.LOAD_CUSTOMER_START, onLoadCustomerStartAsync);
  }
  
  // function add user
  
  function* onAddCustomerStartAsync({ payload }) {
    try {
      const response = yield call(addCustomerApi, payload);
      if (response.status === 200) {
        yield put(addCustomerSuccess(response.data));
      }
    } catch (error) {
      yield put(addCustomerError(error.response.data));
    }
  }
  
  function* onAddCustomer() {
    yield takeLatest(types.ADD_CUSTOMER_START, onAddCustomerStartAsync);
  }
  
  // function delete user
  function* onDeleteCustomerStartAsync({ payload }) {
    try {
      const response = yield call(deleteCustomerApi, payload);
      if (response.status === 204) {
        yield delay(500);
        yield put(deleteCustomerSuccess(payload));
      }
    } catch (error) {
      yield put(deleteCustomerError(error.response.data));
    }
  }
  
  function* onDeleteCustomer() {
    // while (true) {
    //   const { payload } = yield take(types.DELETE_CUSTOMER_START);
    //   yield call(onDeleteCustomerStartAsync, payload);
    // }
  
    yield takeEvery(types.DELETE_CUSTOMER_START, onDeleteCustomerStartAsync);
  }
  
  // function update user
  function* onUpdateCustomerStartAsync({ payload: {customerId, customer} }) {
    try {
      const response = yield call(updateCustomerApi, customerId, customer);
      if (response.status === 200) {
        yield put(updateCustomerSuccess(response.data));
      }
    } catch (error) {
      yield put(updateCustomerError(error.response.data));
    }
  }
  
  function* onUpdateCustomer() {
    yield takeLatest(types.UPDATE_CUSTOMER_START, onUpdateCustomerStartAsync);
  }
  
  const customerSaga = [
    fork(onLoadCustomers),
    fork(onAddCustomer),
    fork(onDeleteCustomer),
    fork(onUpdateCustomer),
    fork(onLoadCustomer)
  ];
  
  export default customerSaga;
  