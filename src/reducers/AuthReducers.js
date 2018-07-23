import { combineReducers } from 'redux';
import {
  SETUP_OCR_ADMIN,
  SETUP_OCR_ADMIN_CLIENT,
  SETUP_OCR_CLIENT,
  SETUP_OCR_USER,
  SETUP_OCR_JWTS,
  SETUP_OCR_TOKENS,
  SETUP_OCR_CATALOG_ATTRIBUTES_REQUEST,
  SETUP_OCR_CATALOG_ATTRIBUTES_SUCCESS,
  SETUP_OCR_CATALOG_ATTRIBUTES_FAILURE,
  SETUP_OCR_CLIENT_COLORS_REQUEST,
  SETUP_OCR_CLIENT_COLORS_SUCCESS,
  SETUP_OCR_CLIENT_COLORS_FAILURE,
  SETUP_OCR_PROMO_TYPES_REQUEST,
  SETUP_OCR_PROMO_TYPES_SUCCESS,
  SETUP_OCR_PROMO_TYPES_FAILURE,
  SETUP_OCR_SUBSCRIPTIONS_REQUEST,
  SETUP_OCR_SUBSCRIPTIONS_SUCCESS,
  SETUP_OCR_SUBSCRIPTIONS_FAILURE,
} from 'actions/Types'
import isEmpty from 'lodash/isEmpty'
import {createRequestReducer} from './CustomReducer'
import appReducer from 'store'

export function setupOcrAdmin (state = {}, action) {
  switch (action.type) {
    case SETUP_OCR_ADMIN:
      return {
        ...state,
        response: action.response
      }
    default: return state
  }
}

export function setupOcrAdminClient (state = {}, action) {
  switch (action.type) {
    case SETUP_OCR_ADMIN_CLIENT:
      return {
        ...state,
        response: action.response
      }
    default: return state
  }
}

export function setupOcrClient (state = {}, action) {
  switch (action.type) {
    case SETUP_OCR_CLIENT:
      return {
        ...state,
        response: action.response
      }
    default: return state
  }
}

export function setupOcrUser (state = {}, action) {
  switch (action.type) {
    case SETUP_OCR_USER:
      return {
        ...state,
        response: action.response
      }
    default: return state
  }
}

export function setupOcrJWTs (state = {}, action) {
  switch (action.type) {
    case SETUP_OCR_JWTS:
      return {
        ...state,
        response: action.response
      }
    default: return state
  }
}

export function setupOcrTokens (state = {}, action) {
  switch (action.type) {
    case SETUP_OCR_TOKENS:
      return {
        ...state,
        response: action.response
      }
    default: return state
  }
}

export const setupOcrCatalog = createRequestReducer({
  FETCH_REQUEST: SETUP_OCR_CATALOG_ATTRIBUTES_REQUEST,
  FETCH_SUCCESS: SETUP_OCR_CATALOG_ATTRIBUTES_SUCCESS,
  FETCH_FAILURE: SETUP_OCR_CATALOG_ATTRIBUTES_FAILURE,
  initialState: []
});

export const setupOcrClientColors = createRequestReducer({
  FETCH_REQUEST: SETUP_OCR_CLIENT_COLORS_REQUEST,
  FETCH_SUCCESS: SETUP_OCR_CLIENT_COLORS_SUCCESS,
  FETCH_FAILURE: SETUP_OCR_CLIENT_COLORS_FAILURE,
  initialState: []
});

export const setupOcrPromoTypes = createRequestReducer({
  FETCH_REQUEST: SETUP_OCR_PROMO_TYPES_REQUEST,
  FETCH_SUCCESS: SETUP_OCR_PROMO_TYPES_SUCCESS,
  FETCH_FAILURE: SETUP_OCR_PROMO_TYPES_FAILURE,
  initialState: []
});

export const setupOcrSubscriptions = createRequestReducer({
  FETCH_REQUEST: SETUP_OCR_SUBSCRIPTIONS_REQUEST,
  FETCH_SUCCESS: SETUP_OCR_SUBSCRIPTIONS_SUCCESS,
  FETCH_FAILURE: SETUP_OCR_SUBSCRIPTIONS_FAILURE,
  initialState: []
});

const generalStorage = combineReducers({
  setupOcrAdmin,
  setupOcrAdminClient,
  setupOcrClient,
  setupOcrUser,
  setupOcrJWTs,
  setupOcrTokens,
  setupOcrCatalog,
  setupOcrClientColors,
  setupOcrPromoTypes,
  setupOcrSubscriptions,
});

export default generalStorage;
