const initialState = {
  res: [],
  error: null,
  loading: true
};
export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PEOPLE_REQUEST":
      return {
        error: null,
        loading: true
      };
    case "FETCH_PEOPLE_SUCCESS":
      return {
        res: [...action.payload],
        error: null,
        loading: false
      };
    case "FETCH_PEOPLE_FAILURE":
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
