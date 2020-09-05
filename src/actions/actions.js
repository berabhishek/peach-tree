/*
 * action types
 */
export const SET_USER = 'SET_USER'
export const ADD_TRANSACTION = "ADD_TRANSACTION"
export const ADD_CAPITAL = "ADD_CAPITAL"
export const REGISTER_USER = 'REGISTER_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'


/*
 * action creators
 */

export function setUser(userObj) {
  return { type: SET_USER, payload: userObj }
}

export function addTransaction(transactionObj) {
  return {
    type:  ADD_TRANSACTION,
    payload: transactionObj
  }
}
export function addCapital(capitalObj) {
  return {
    type:  ADD_CAPITAL,
    payload: capitalObj
  }
}
export function setCurrentUser(userObj) {
  return { type: SET_CURRENT_USER, data: userObj }
}

export function registerUser(userObj) {
    return { type: REGISTER_USER, data: userObj}
}