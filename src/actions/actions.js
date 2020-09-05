/*
 * action types
 */
export const SET_USER = 'SET_USER'

/*
 * action creators
 */

export function setUser(userObj) {
  return { type: SET_USER, payload: userObj }
}