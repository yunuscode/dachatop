export const SET_USER = "SET_USER";

export const setUserToken = (token: string) => ({ type: SET_USER, token });

export type User = {
  name?: string;
  token?: string;
  isLoggedIn: boolean;
  phone_number?: string;
  sessionId?: string;
};
