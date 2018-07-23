import { combineReducers } from 'redux';
import { USER_LOGOUT } from 'actions/Types'
import AuthReducers from './AuthReducers'
// add more reducers later
export const appReducer = combineReducers({
  AuthReducers
})

// to support logging out that clears redux overall state:
export const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action)
}
