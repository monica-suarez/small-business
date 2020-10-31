import { combineReducers } from "redux";

const user = (state = null, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return (state = action.value);
    default:
      return state;
  }
};

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return [...state, action.value];
    case "REMOVE_BUSINESS":
      const businesses = [...state];
      businesses.splice(action.value, 1);
      return businesses;
    default:
      return state;
  }
};

export default combineReducers({ user, businesses });
