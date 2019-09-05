import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authReducer from './auth/reducer'
import carsReducer from './cars/reducer'
import locationsReducer from './locations/reducer'

// import reducers...
const rootReducer = combineReducers({
    auth: authReducer,
    cars: carsReducer,
    locations: locationsReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))