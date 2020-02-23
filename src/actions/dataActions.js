import { SET_DATA, SHOW_SCHEDULE } from './types'

export const setData = (payload) => ({
  type: SET_DATA,
  payload
})

export const showSchedule = (payload) => ({
  type: SHOW_SCHEDULE,
  payload
})