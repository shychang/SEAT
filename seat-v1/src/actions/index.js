import fetch from 'isomorphic-fetch'


export const REQUEST_SEATS = 'REQUEST_SEATS'
export const RECEIVE_SEATS = 'RECEIVE_SEATS'


function requestSeats(seat) {
  return {
    type: REQUEST_SEATS,
    seat
  }
}

function receiveSeats(seat, json) {
  return {
    type: RECEIVE_SEATS,
    seat,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchSeats(seats) {
  return dispatch => {
    dispatch(requestSeats(seats))
    return fetch(`localhost:3000/api`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(seats, json)))
  }
}