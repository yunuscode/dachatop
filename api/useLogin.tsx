import axios from "axios";
import { API_URL } from "@/constants/config";

const LOGIN_ENDPOINT = API_URL + "/auth/login";
const VERIFY_ENDPOINT = API_URL + "/auth/verify";

export default function useLogin() {
  const login = async (phone_number: string) => {
    const response = await axios.post(LOGIN_ENDPOINT, {
      phone: "+998" + phone_number,
    });

    return response.data;
  };

  const verifyCode = async (otpId: string, otpCode: string) => {
    const response = await axios.post(VERIFY_ENDPOINT, {
      otp_id: otpId,
      otp_code: otpCode,
    });

    return response;
  };

  return {
    login,
    verifyCode,
  };
}
