import { Reducer, combineReducers } from "redux";
import { EDIT_LANG, SET_USER, User } from "@/actions/user";

const initalUserObject: User = {
  isLoggedIn: false,
  lang: "en",
};

const user: Reducer = (user = initalUserObject, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...user,
        token: action.token,
        isLoggedIn: !!action.token?.length,
      };
    case EDIT_LANG:
      return { ...user, lang: action.lang };
    default:
      return user;
  }
};

const rootReducer = combineReducers({ user });

export default rootReducer;

export type RootReducer = ReturnType<typeof rootReducer>;
