import useOwner from "@/api/useOwner";
import { ScrollView, Text, TextInput, View } from "@/components/Themed";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

function ManagementScreen() {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { getBookings, getRoom, priceChange } = useOwner();

  const [bookings, setBookings] = useState<any[]>([]);
  const [room, setRoom] = useState<any>();
  const [regularPrice, setRegularPrice] = useState<number>(
    room?.priceForRegularDays
  );
  const [weekendPrice, setWeekendPrice] = useState<number>(
    room?.priceForWeekends
  );

  useEffect(() => {
    navigation.addListener("focus", () => {
      getBookings().then((data) => {
        setBookings(data.bookings);
      });

      getRoom().then((data) => {
        setRoom(data.room);
      });
    });

    getBookings().then((data) => {
      setBookings(data.bookings);
    });

    getRoom().then((data) => {
      setRoom(data.room);
    });
  }, []);

  const calculateBookedDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const bookedDays = [];

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      bookedDays.push(new Date(d));
    }

    return bookedDays;
  };

  const customDatesStyles: any = bookings?.flatMap((booking) => {
    const bookedDays = calculateBookedDays(booking.startDate, booking.endDate);

    return bookedDays.map((day) => {
      return {
        date: day,
        style: {
          backgroundColor: "#0064E5",
        },
        textStyle: {
          color: "#fff",
        },
      };
    });
  });

  const todaysBookings = bookings?.filter(
    (booking) =>
      new Date(booking.startDate) <= startDate &&
      new Date(booking.endDate) >= startDate
  );

  return (
    <ScrollView>
      <CalendarPicker
        startFromMonday
        scrollable
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        customDatesStyles={customDatesStyles}
        // disabledDates={isDisabledDate}
        textStyle={[
          styles.calendarTextStyle,
          {
            color: colorScheme === "dark" ? "#fff" : "#000",
          },
        ]}
        maxRangeDuration={7}
        selectedRangeStartStyle={{ backgroundColor: "#0064E5" }}
        selectedRangeStyle={{ backgroundColor: "#0064E5" }}
        selectedDayStyle={{ backgroundColor: "#000000" }}
        selectedDayTextStyle={{ color: "#ffffff" }}
        restrictMonthNavigation
        onDateChange={(date, type) => {
          setStartDate(date);
        }}
        minDate={new Date()}
        nextTitle={t("Next")}
        previousTitle={t("Previus")}
        months={[
          t("January"),
          t("February"),
          t("March"),
          t("April"),
          t("May"),
          t("June"),
          t("July"),
          t("August"),
          t("September"),
          t("October"),
          t("November"),
          t("December"),
        ]}
        weekdays={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]}
      />
      <View style={styles.upcomingBookings}>
        <Text style={styles.upcomingBookingsTitle}>Buyurtmalar</Text>
        {
          // @ts-ignore
          todaysBookings.map((booking) => {
            return (
              <View>
                <Pressable
                  style={styles.booking}
                  onPress={() => {
                    Linking.canOpenURL(`tel:${booking.user.phone}`).then(
                      (supported) => {
                        if (supported) {
                          Linking.openURL(`tel:${booking.user.phone}`);
                        } else {
                          Alert.alert(
                            "Telefon qo'ng'iroq qilish uchun mavjud emas"
                          );
                        }
                      }
                    );
                  }}
                >
                  <View style={styles.bookingInformation}>
                    <Text style={styles.bookingTitle}>
                      Buyurtma{" "}
                      {booking.id.slice(
                        booking.id.length - 5,
                        booking.id.length
                      )}
                    </Text>
                    <Text style={styles.bookingStatus}>To'langan</Text>
                  </View>
                  <View
                    style={[
                      styles.bookingInformation,
                      {
                        marginTop: 10,
                      },
                    ]}
                  >
                    <Text style={styles.bookingName}>
                      {booking.user.name || "Ismsiz"}
                    </Text>
                    <Text style={styles.bookingName}>
                      +{booking.user.phone}
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.informationBox}>
                  <Text style={styles.informationBoxText}>
                    Qo'ngiroq qilish uchun ustiga bosing!
                  </Text>
                </View>
              </View>
            );
          })
        }

        <Text
          style={[
            styles.upcomingBookingsTitle,
            {
              marginTop: 20,
            },
          ]}
        >
          Narxlarni o'zgartirish
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#00000055",
            borderRadius: 4,
            padding: 10,
            marginTop: 10,
            fontFamily: "SpaceMono",
            fontSize: 18,
          }}
          placeholder="Odatiy narx"
          onChangeText={(text) => {
            setRegularPrice(Number(text));
          }}
          defaultValue={`${room?.priceForRegularDays || 0}`}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#00000055",
            borderRadius: 4,
            padding: 10,
            marginTop: 10,
            fontFamily: "SpaceMono",
            fontSize: 18,
          }}
          placeholder="Dam olish kuni uchun narx"
          onChangeText={(text) => {
            setWeekendPrice(Number(text));
          }}
          defaultValue={`${room?.priceForWeekends || 0}`}
        />

        <Pressable
          onPress={() => {
            priceChange(
              regularPrice || room?.priceForRegularDays,
              weekendPrice || room?.priceForWeekends
            )
              .then(() => {
                Alert.alert("Narxlar o'zgardi");
              })
              .catch(() => {
                Alert.alert("Narxlar o'zgarmadi");
              });
          }}
          style={{
            backgroundColor: "#0064E5",
            padding: 10,
            marginTop: 10,
            borderRadius: 4,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontFamily: "SpaceMono",
              fontSize: 18,
            }}
          >
            Saqlash
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  calendarTextStyle: {
    fontFamily: "SpaceMono",
    fontSize: 14,
  },
  upcomingBookings: {
    paddingHorizontal: 20,
  },
  upcomingBookingsTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "SpaceMono",
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SpaceMono",
  },
  booking: {
    borderWidth: 1,
    borderColor: "#00000055",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  bookingInformation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookingStatus: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SpaceMono",
  },
  bookingName: {
    fontSize: 14,
    fontFamily: "SpaceMono",
  },
  informationBox: {
    padding: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#00000055",
    borderTopWidth: 0,
  },
  informationBoxText: {
    fontSize: 12,
    fontFamily: "SpaceMono",
  },
});

export default ManagementScreen;
