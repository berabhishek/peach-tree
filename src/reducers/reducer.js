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
        default: return state
    }
}

export default reducer