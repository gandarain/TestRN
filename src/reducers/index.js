import { combineReducers } from 'redux'
import dataReducers from './dataReducers'
// We call state in here
export default combineReducers({
  data: dataReducers,
})
