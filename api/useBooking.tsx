import axios from "axios";
import { API_URL } from "@/constants/config";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const BOOKING_GET_ENDPOINT = API_URL + "/booking";
const BOOKING_CREATE_ENDPOINT = API_URL + "/booking";

export default function useBooking() {
  const user = useSelector((state: RootState) => state.user);

  const getBookings = async () => {
    const response = await axios.get(BOOKING_GET_ENDPOINT, {
      headers: {
        Authorization: user.token,
      },
    });

    return response.data;
  };

  const createBooking = async (
    roomId: string,
    startDate: Date,
    endDate: Date
  ) => {
    const response = await axios.post(
      BOOKING_CREATE_ENDPOINT,
      {
        roomId,
        startDate,
        endDate,
      },
      {
        headers: {
          Authorization: user.token,
        },
      }
    );

    return response.data;
  };

  return {
    getBookings,
    createBooking,
  };
}
