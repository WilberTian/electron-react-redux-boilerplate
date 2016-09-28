import { combineReducers } from 'redux'
import { ADD_COUNT, SUB_COUNT } from '../action/counter.action'

let initState = {
    count: 0
}

function countReducer(state = initState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return Object.assign({}, state, {
                count: action.value + 1
            });
            
        case SUB_COUNT:
            return Object.assign({}, state, {
                count: action.value - 1
            });
            
        default:
            return state
    }
}

export default countReducer