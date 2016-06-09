// ------------------------------------
// Constants
// ------------------------------------
export const SET_TIME = 'SET_TIME'

// ------------------------------------
// Actions
// ------------------------------------
export function setTime (time) {
  return {
    type: SET_TIME,
    payload: time
  }
}

export const actions = {
  setTime
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_TIME]: (state, action) => {
    return state = action.payload;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0

export default function pomodoroReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
