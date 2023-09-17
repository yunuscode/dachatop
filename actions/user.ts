export const SET_USER = "SET_USER";
export const EDIT_LANG = "EDIT_LANG";

export const setUserToken = (token: string) => ({ type: SET_USER, token });

export const editUserLang = (lang: string) => ({ type: EDIT_LANG, lang });

export type User = {
  name?: string;
  token?: string;
  isLoggedIn: boolean;
  phone_number?: string;
  sessionId?: string;
  lang: string;
};
