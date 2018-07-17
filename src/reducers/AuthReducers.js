import { combineReducers } from 'redux';
import {
  SETUP_OCR_ADMIN,
  SETUP_OCR_ADMIN_CLIENT,
  SETUP_OCR_CATALOG_ATTRIBUTES,
  SETUP_OCR_CLIENT,
  SETUP_OCR_CLIENT_COLORS,
  SETUP_OCR_JWTS,
  SETUP_OCR_PROMO_TYPES,
  SETUP_OCR_SUBSCRIPTIONS,
  SETUP_OCR_TOKENS,
  SETUP_OCR_USER,
} from 'action/Types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETUP_OCR_ADMIN:
      console.log(" IN OCR ADMIN")
      return {
        ...state,
        item: action.payload
      }
    default: return state
  }
}

// const generalStorage = combineReducers({
//   setupOcrAdmin
// });
//
// export default generalStorage;
