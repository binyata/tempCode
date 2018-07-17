import { combineReducers } from 'redux';
import {
  SETUP_OCR_CATALOG_ATTRIBUTES_REQUEST
  // SETUP_OCR_ADMIN,
  // SETUP_OCR_ADMIN_CLIENT,
  // SETUP_OCR_CATALOG_ATTRIBUTES,
  // SETUP_OCR_CLIENT,
  // SETUP_OCR_CLIENT_COLORS,
  // SETUP_OCR_JWTS,
  // SETUP_OCR_PROMO_TYPES,
  // SETUP_OCR_SUBSCRIPTIONS,
  // SETUP_OCR_TOKENS,
  // SETUP_OCR_USER,
} from 'actions/Types'
import isEmpty from 'lodash/isEmpty'

// export function setupOcrAdmin (state = {}, action) {
//   switch (action.type) {
//     case SETUP_OCR_ADMIN:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrAdminClient (state = {}, action) {
//   switch (action.type) {
//     case SETUP_OCR_ADMIN_CLIENT:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }

export function setupOcrCatalog (state = [], action) {
  switch (action.type) {
    case SETUP_OCR_CATALOG_ATTRIBUTES_REQUEST:
      return {
        ...state,
        item: action.payload
      }
    default: return state
  }
}

// export function setupOcrClient (state = {}, action) {
//   switch (action.type) {
//     case SETUP_OCR_CLIENT:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrClientColors (state = [], action) {
//   switch (action.type) {
//     case SETUP_OCR_CLIENT_COLORS:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrJWTs (state = {}, action) {
//   switch (action.type) {
//     case SETUP_OCR_JWTS:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrPromoTypes (state = [], action) {
//   switch (action.type) {
//     case SETUP_OCR_PROMO_TYPES:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrSubscriptions (state = [], action) {
//   switch (action.type) {
//     case SETUP_OCR_SUBSCRIPTIONS:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrTokens (state = {}, action) {
//   switch (action.type) {
//     case SETUP_OCR_TOKENS:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }
//
// export function setupOcrUser (state = {}, action) {
//   switch (action.type) {
//     case SETUP_OCR_USER:
//       return {
//         ...state,
//         item: action.payload
//       }
//     default: return state
//   }
// }

const generalStorage = combineReducers({
  // setupOcrAdmin,
  // setupOcrAdminClient,
  setupOcrCatalog,
  // setupOcrClient,
  // setupOcrClientColors,
  // setupOcrJWTs,
  // setupOcrPromoTypes,
  // setupOcrSubscriptions,
  // setupOcrTokens,
  // setupOcrUser
});

export default generalStorage;
