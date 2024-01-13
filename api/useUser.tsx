import axios from "axios";
import { API_URL } from "@/constants/config";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const DELETE_USER = API_URL + "/users/account";
const GET_ME = API_URL + "/users/getMe";
const UPDATE_NAME = API_URL + "/users/updateName";

export default function useUser() {
  const user = useSelector((state: RootState) => state.user);

  const deleteUser = async () => {
    const response = await axios.delete(
      DELETE_USER,

      {
        headers: {
          Authorization: user.token,
        },
      }
    );

    return response.data;
  };

  const getMe = async () => {
    const response = await axios.get(
        GET_ME,
      {
        headers: {
          Authorization: user.token,
        },
      }
    );

    return response.data;
  }

  const updateName = async (name: string) => {
    const response = await axios.post(
      UPDATE_NAME,
      {
        name,
      },
      {
        headers: {
          Authorization: user.token,
        },
      }
    );

    return response.data;
  }

  return {
    deleteUser,
    getMe,
    updateName
  };
}
