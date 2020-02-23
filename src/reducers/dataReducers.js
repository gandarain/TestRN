import { SET_DATA, SHOW_SCHEDULE } from '../actions/types'

const initialState = {
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_DATA:
    return { 
      ...state, 
      data: payload
    }
  
  case SHOW_SCHEDULE:
    return { 
      ...state, 
      data: state.data.map(
        item => item.id === payload? { ...item, show_schedule: !item.show_schedule }: item
      )
    }

  default:
    return state
  }
}
