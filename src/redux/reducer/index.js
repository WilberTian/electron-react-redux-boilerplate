import { combineReducers } from 'redux'
import counterReducer from './counter.reducer'

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer
