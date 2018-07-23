export function createRequestReducer({ FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, initialState }) {
  return function(state = {
    type: null,
    isFetching: false,
    response: initialState,
    status: null
  }, action) {
    switch (action.type) {
      case FETCH_REQUEST:
        return {
          type: action.type,
          isFetching: true,
          response: initialState,
          status: null
        };
      case FETCH_SUCCESS:
        return {
          type: action.type,
          isFetching: false,
          response: action.response,
          status: 'success'
        };
      case FETCH_FAILURE:
        return {
          type: action.type,
          isFetching: false,
          response: action.response,
          status: 'error'
        };
      default:
        return state;
    }
  };
}
