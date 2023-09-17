export const SET_USER = "SET_USER";
export const EDIT_LANG = "EDIT_LANG";
export const SET_OTP_CODE_ID = "SET_OTP_CODE_ID";

export const setUserToken = (token: string, role: string) => ({
  type: SET_USER,
  token,
  role,
});

export const editUserLang = (lang: string) => ({ type: EDIT_LANG, lang });

export const setOTPCodeId = (otpCodeId: string) => ({
  type: SET_OTP_CODE_ID,
  otpCodeId,
});

export type User = {
  name?: string;
  token?: string;
  isLoggedIn: boolean;
  phone_number?: string;
  sessionId?: string;
  lang: string;
  otpCodeId?: string;
  role?: string;
};
