import axios from "axios";
import { API_URL } from "@/constants/config";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const BOOKING_GET_ENDPOINT = API_URL + "/owner/bookings";
const OWNER_GET_ROOM = API_URL + "/owner/rooms";
const OWNER_PRICE_ROOM = API_URL + "/owner/rooms";

export default function useOwner() {
  const user = useSelector((state: RootState) => state.user);

  const getBookings = async () => {
    const response = await axios.get(BOOKING_GET_ENDPOINT, {
      headers: {
        Authorization: user.token,
      },
    });

    return response.data;
  };

  const getRoom = async () => {
    const response = await axios.get(OWNER_GET_ROOM, {
      headers: {
        Authorization: user.token,
      },
    });

    return response.data;
  };

  const priceChange = async (
    priceForRegularDays: number,
    priceForWeekends: number
  ) => {
    const response = await axios.put(
      OWNER_PRICE_ROOM,
      {
        priceForRegularDays,
        priceForWeekends,
      },
      {
        headers: {
          Authorization: user.token,
          ContentType: "application/json",
        },
      }
    );

    return response.data;
  };

  return {
    getBookings,
    getRoom,
    priceChange,
  };
}
