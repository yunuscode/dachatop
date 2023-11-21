import axios from "axios";
import { API_URL } from "@/constants/config";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const ROOM_GET_ENDPOINT = API_URL + "/rooms";

export default function useRoom() {
  const user = useSelector((state: RootState) => state.user);

  const getRooms = async () => {
    const response = await axios.get(ROOM_GET_ENDPOINT, {
      headers: {
        Authorization: user.token,
      },
    });

    return response.data;
  };

  return {
    getRooms,
  };
}
