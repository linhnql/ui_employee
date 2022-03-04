import * as types from './actionTypes'


export const loadHomesStart = (params) => ({
    type: types.LOAD_HOMES_START,
    payload: params
})

export const loadHomesSuccess = (homes) => ({
    type: types.LOAD_HOMES_SUCCESS,
    payload: homes
})

export const loadHomesError = (error) => ({
    type: types.LOAD_HOMES_ERROR,
    payload: error
})


export const loadHomeStart = (homeId) => ({
    type: types.LOAD_HOME_START,
    payload: homeId
})

export const loadHomeSuccess = (home) => ({
    type: types.LOAD_HOME_SUCCESS,
    payload: home
})

export const loadHomeError = (error) => ({
    type: types.LOAD_HOME_ERROR,
    payload: error
})


export const addHomeStart = (home) => ({
    type: types.ADD_HOME_START,
    payload: home
})

export const addHomeSuccess = (home) => ({
    type: types.ADD_HOME_SUCCESS,
    payload: home
})

export const addHomeError = (error) => ({
    type: types.ADD_HOME_ERROR,
    payload: error
})

export const updateHomeStart = (homeId, home) => ({
    type: types.UPDATE_HOME_START,
    payload: {homeId, home}
})

export const updateHomeSuccess = (home) => ({
    type: types.UPDATE_HOME_SUCCESS,
    payload: home
})

export const updateHomeError = (error) => ({
    type: types.UPDATE_HOME_ERROR,
    payload: error
})

export const deleteHomeStart = (homeId) => ({
    type: types.DELETE_HOME_START,
    payload: homeId
})

export const deleteHomeSuccess = (homeId) => ({
    type: types.DELETE_HOME_SUCCESS,
    payload: homeId
})

export const deleteHomeError = (error) => ({
    type: types.DELETE_HOME_ERROR,
    payload: error
})


