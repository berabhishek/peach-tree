import { SET_USER } from "../actions/actions"
import { ADD_TRANSACTION, ADD_CAPITAL } from "../actions/actions"
import { act } from "react-dom/test-utils";
import { REGISTER_USER, SET_CURRENT_USER } from "../actions/actions"

const defaultState = {
    currentUser: {},
    users: [],
    transaction: [],
    capital: []
}

const getDefaultState = function() {
    try {
        let state = sessionStorage.getItem("peach-bank-state");
        if(state === null) {
            return defaultState;
        }
        state = JSON.parse(state);
        for(let i = 0; i < state.transaction.length; i++) {
            state.transaction[i][0] = new Date(state.transaction[i][0])
        }
        for(let i = 0; i < state.capital.length; i++) {
            state.capital[i][0] = new Date(state.capital[i][0])
        }
        return state;
    } catch(err) {
        console.error("Error restoring state, returning default");
        return defaultState;
    }

}

const setDefaultState = function(state) {
    try {
        sessionStorage.setItem("peach-bank-state", JSON.stringify(state));
    } catch(err) {
        console.error("Error setting state");
    }
}

function reducer(state = getDefaultState(), action) {
    let final_state = {};
    switch(action.type) {
        case REGISTER_USER:
            final_state = {
                ...state,
                users: [...state.users, action.data]
            };
            setDefaultState(final_state);
            return final_state; 
        case SET_CURRENT_USER:
            final_state = {
                ...state,
                currentUser: Object.assign(action.data, {})
            };
            setDefaultState(final_state);
            return final_state;
        case ADD_TRANSACTION:
            state.transaction.push(action.payload);
            final_state = {
                ...state,
                transaction: state.transaction,
                count_transaction: state.transaction.length
            };
            setDefaultState(final_state);
            return final_state;

        case ADD_CAPITAL:
            state.capital.push(action.payload);
            final_state = {
                ...state,
                capital: state.capital,
                count_capital: state.capital.length
            }
            setDefaultState(final_state);
            return final_state
        default:
            setDefaultState(state); 
            return state
    }
}

export default reducer;