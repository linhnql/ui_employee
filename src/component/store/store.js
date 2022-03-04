import createSageMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import rootReducer from '../../redux/rootReducer';
import rootSaga from '../../redux/rootSaga';

const sageMiddleware = createSageMiddleware()

const middleware = [sageMiddleware]

middleware.push(logger)

const store = createStore(rootReducer, applyMiddleware(...middleware))

sageMiddleware.run(rootSaga)

export default store;