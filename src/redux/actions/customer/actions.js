import * as types from './actionTypes'


export const loadCustomersStart = (params) => ({
    type: types.LOAD_CUSTOMERS_START,
    payload: params
})

export const loadCustomersSuccess = (customers) => ({
    type: types.LOAD_CUSTOMERS_SUCCESS,
    payload: customers
})

export const loadCustomersError = (error) => ({
    type: types.LOAD_CUSTOMERS_ERROR,
    payload: error
})


export const loadCustomerStart = (customerId) => ({
    type: types.LOAD_CUSTOMER_START,
    payload: customerId
})

export const loadCustomerSuccess = (customer) => ({
    type: types.LOAD_CUSTOMER_SUCCESS,
    payload: customer
})

export const loadCustomerError = (error) => ({
    type: types.LOAD_CUSTOMER_ERROR,
    payload: error
})


export const addCustomerStart = (customer) => ({
    type: types.ADD_CUSTOMER_START,
    payload: customer
})

export const addCustomerSuccess = (customer) => ({
    type: types.ADD_CUSTOMER_SUCCESS,
    payload: customer
})

export const addCustomerError = (error) => ({
    type: types.ADD_CUSTOMER_ERROR,
    payload: error
})

export const updateCustomerStart = (customerId, customer) => ({
    type: types.UPDATE_CUSTOMER_START,
    payload: {customerId, customer}
})

export const updateCustomerSuccess = (customer) => ({
    type: types.UPDATE_CUSTOMER_SUCCESS,
    payload: customer
})

export const updateCustomerError = (error) => ({
    type: types.UPDATE_CUSTOMER_ERROR,
    payload: error
})

export const deleteCustomerStart = (customerId) => ({
    type: types.DELETE_CUSTOMER_START,
    payload: customerId
})

export const deleteCustomerSuccess = (customerId) => ({
    type: types.DELETE_CUSTOMER_SUCCESS,
    payload: customerId
})

export const deleteCustomerError = (error) => ({
    type: types.DELETE_CUSTOMER_ERROR,
    payload: error
})


