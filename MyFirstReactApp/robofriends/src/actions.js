// Creating an Action:
// Action: setSearchfield that takes in input: text of type: 'CHANGE_SEARCH_FIELD'
import {CHANGE_SEARCH_FIELD} from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})