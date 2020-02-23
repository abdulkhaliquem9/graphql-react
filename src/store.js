import {createStore, combineReducers} from 'redux'

import measurementReducer from './reducer'

const rootReducer = combineReducers({measurementReducer})
const store = createStore(rootReducer)

export default store