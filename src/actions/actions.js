/*
 * action types
 */
export const SET_USER = 'SET_USER'
export const ADD_TRANSACTION = "ADD_TRANSACTION"
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