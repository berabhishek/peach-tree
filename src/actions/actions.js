/*
 * action types
 */
export const REGISTER_USER = 'REGISTER_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

/*
 * action creators
 */

export function setCurrentUser(userObj) {
  return { type: SET_CURRENT_USER, data: userObj }
}

export function registerUser(userObj) {
    return { type: REGISTER_USER, data: userObj}
}