import { Reducer, combineReducers } from "redux";
import { SET_USER, User } from "@/actions/user";

const initalUserObject: User = {
  isLoggedIn: false,
};

const user: Reducer = (user = initalUserObject, action) => {
  switch (action.type) {
    case SET_USER:
      return { token: action.token };
    default:
      return user;
  }
};

const rootReducer = combineReducers({ user });

export default rootReducer;

export type RootReducer = ReturnType<typeof rootReducer>;
