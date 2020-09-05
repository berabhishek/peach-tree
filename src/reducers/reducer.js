import { SET_USER } from "../actions/actions"
import { ADD_TRANSACTION } from "../actions/actions"
import { act } from "react-dom/test-utils";
const defaultState = {
    currentUser: {},
    transaction: []
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case ADD_TRANSACTION:
            state.transaction.push(action.payload);
            return {
                ...state,
                transaction: state.transaction,
                count: state.transaction.length
            }
        default: return state
    }
}

export default reducer