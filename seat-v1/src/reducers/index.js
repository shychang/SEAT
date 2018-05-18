import { combineReducers } from 'redux'
import {REQUEST_SEATS} from '../actions/index'
import {RECEIVE_SEATS} from '../actions/index'


function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_SEATS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_SEATS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
      })
    default:
      return state
  }
}


function postsBySeat(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SEATS:
    case REQUEST_SEATS:
      return Object.assign({}, state, {
        [action.seat]: posts(state[action.seat], action)
      })
    default:
      return state
  }
}

const seatApp = combineReducers({
  postsBySeat
})

export default seatApp