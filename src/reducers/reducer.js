import { SET_USER } from "../actions/actions"
import { ADD_TRANSACTION, ADD_CAPITAL } from "../actions/actions"
import { act } from "react-dom/test-utils";
import { REGISTER_USER, SET_CURRENT_USER } from "../actions/actions"

const defaultState = {
    currentUser: {},
    users: []
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.data]
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: Object.assign(action.data, {})
            }
        case ADD_TRANSACTION:
            state.transaction.push(action.payload);
            return {
                ...state,
                transaction: state.transaction,
                count: state.transaction.length
            }

        case ADD_CAPITAL:
            state.capital.push(action.payload);
            return {
                ...state,
                capital: state.capital,
                count: state.capital.length
            }
        default: return state
    }
}

export default reducer