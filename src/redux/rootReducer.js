import {combineReducers} from 'redux'
import homeReducer from './reducers/home/homeReducer'
import customerReducer from './reducers/customer/customerReducer'

const rootReducer = combineReducers({
    homeReducer,
    customerReducer
})

export default rootReducer;