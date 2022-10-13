import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILER,
} from "./userType";

const initialState = {
  loading: false,
  users: [],
  err: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        err: "",
      };
    case FETCH_USER_FAILER:
      return {
        loading: false,
        users: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
