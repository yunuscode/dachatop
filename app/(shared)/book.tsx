import { Text, View } from "@/components/Themed";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import CalendarPicker from "react-native-calendar-picker";
import { useState } from "react";
import moment, { Moment } from "moment";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import calculateTotalPrice from "@/utils/priceCalculator";
import { showMessage } from "react-native-flash-message";

function BookScreen() {
  const height = Dimensions.get("window").height;
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const route = useRoute();
  const {
    params: { item },
  } = route.params as any;

  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  moment.locale("uz");

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.infoTable,
          {
            backgroundColor: colorScheme === "dark" ? "#0c57b3" : "#EBF4FF",
          },
        ]}
      >
        <View style={styles.infoTableInformations}>
          <Text color="grayText" style={styles.startDayText}>
            Kirish kuni
          </Text>
          <Text style={styles.dateText}>
            {moment(startDate).format("Do MMM")}
          </Text>
          <Text style={styles.dayText}>{item.entryTime} dan</Text>
        </View>
        <Svg width="72" height="18" viewBox="0 0 72 18" fill="none">
          <Path
            d="M2 7.5C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5L2 7.5ZM72 9L57 0.339746V17.6603L72 9ZM3.94444 10.5C4.77287 10.5 5.44444 9.82843 5.44444 9C5.44444 8.17157 4.77287 7.5 3.94444 7.5V10.5ZM7.83333 7.5C7.00491 7.5 6.33333 8.17157 6.33333 9C6.33333 9.82843 7.00491 10.5 7.83333 10.5V7.5ZM11.7222 10.5C12.5506 10.5 13.2222 9.82843 13.2222 9C13.2222 8.17157 12.5506 7.5 11.7222 7.5V10.5ZM15.6111 7.5C14.7827 7.5 14.1111 8.17157 14.1111 9C14.1111 9.82843 14.7827 10.5 15.6111 10.5V7.5ZM19.5 10.5C20.3284 10.5 21 9.82843 21 9C21 8.17157 20.3284 7.5 19.5 7.5V10.5ZM23.3889 7.5C22.5605 7.5 21.8889 8.17157 21.8889 9C21.8889 9.82843 22.5605 10.5 23.3889 10.5V7.5ZM27.2778 10.5C28.1062 10.5 28.7778 9.82843 28.7778 9C28.7778 8.17157 28.1062 7.5 27.2778 7.5V10.5ZM31.1667 7.5C30.3382 7.5 29.6667 8.17157 29.6667 9C29.6667 9.82843 30.3382 10.5 31.1667 10.5V7.5ZM35.0556 10.5C35.884 10.5 36.5556 9.82843 36.5556 9C36.5556 8.17157 35.884 7.5 35.0556 7.5V10.5ZM38.9444 7.5C38.116 7.5 37.4444 8.17157 37.4444 9C37.4444 9.82843 38.116 10.5 38.9444 10.5V7.5ZM42.8333 10.5C43.6618 10.5 44.3333 9.82843 44.3333 9C44.3333 8.17157 43.6618 7.5 42.8333 7.5V10.5ZM46.7222 7.5C45.8938 7.5 45.2222 8.17157 45.2222 9C45.2222 9.82843 45.8938 10.5 46.7222 10.5V7.5ZM50.6111 10.5C51.4395 10.5 52.1111 9.82843 52.1111 9C52.1111 8.17157 51.4395 7.5 50.6111 7.5V10.5ZM54.5 7.5C53.6716 7.5 53 8.17157 53 9C53 9.82843 53.6716 10.5 54.5 10.5V7.5ZM58.3889 10.5C59.2173 10.5 59.8889 9.82843 59.8889 9C59.8889 8.17157 59.2173 7.5 58.3889 7.5V10.5ZM62.2778 7.5C61.4494 7.5 60.7778 8.17157 60.7778 9C60.7778 9.82843 61.4494 10.5 62.2778 10.5V7.5ZM66.1667 10.5C66.9951 10.5 67.6667 9.82843 67.6667 9C67.6667 8.17157 66.9951 7.5 66.1667 7.5V10.5ZM70.0556 7.5C69.2271 7.5 68.5556 8.17157 68.5556 9C68.5556 9.82843 69.2271 10.5 70.0556 10.5V7.5ZM2 10.5H3.94444V7.5H2L2 10.5ZM7.83333 10.5L11.7222 10.5V7.5L7.83333 7.5V10.5ZM15.6111 10.5L19.5 10.5V7.5L15.6111 7.5V10.5ZM23.3889 10.5H27.2778V7.5H23.3889V10.5ZM31.1667 10.5H35.0556V7.5L31.1667 7.5V10.5ZM38.9444 10.5L42.8333 10.5V7.5L38.9444 7.5V10.5ZM46.7222 10.5H50.6111V7.5L46.7222 7.5V10.5ZM54.5 10.5H58.3889V7.5H54.5V10.5ZM62.2778 10.5H66.1667V7.5L62.2778 7.5V10.5Z"
            fill="#0064E5"
          />
        </Svg>
        <View style={styles.infoTableInformationsEnd}>
          <Text color="grayText" style={styles.startDayText}>
            Chiqish kuni
          </Text>
          <Text style={styles.dateText}>
            {moment(endDate).format("Do MMM")}
          </Text>
          <Text style={styles.dayText}>{item.leaveTime} gacha</Text>
        </View>
      </View>

      <CalendarPicker
        startFromMonday
        scrollable
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        allowRangeSelection
        textStyle={[
          styles.calendarTextStyle,
          {
            color: colorScheme === "dark" ? "#fff" : "#000",
          },
        ]}
        minDate={startDate || new Date()}
        maxRangeDuration={7}
        selectedRangeStartStyle={{ backgroundColor: "#0064E5" }}
        selectedRangeStyle={{ backgroundColor: "#0064E5" }}
        selectedDayStyle={{ backgroundColor: "#0064E5" }}
        selectedDayTextStyle={{ color: "#ffffff" }}
        restrictMonthNavigation
        onDateChange={(date, type) => {
          if (type === "END_DATE") {
            setEndDate(date);
          } else {
            setStartDate(date);
          }
        }}
        nextTitle="Keyingi"
        previousTitle="Oldingi"
        months={[
          "Yanvar",
          "Fevral",
          "Mart",
          "Aprel",
          "May",
          "Iyun",
          "Iyul",
          "Avgust",
          "Sentabr",
          "Oktabr",
          "Noyabr",
          "Dekabr",
        ]}
        weekdays={["Du", "Se", "Chor", "Pa", "Ju", "Sha", "Yak"]}
      />
      <View
        style={{
          height: 2,
          marginTop: "auto",
          backgroundColor: Colors[colorScheme ?? "light"].borderColor,
        }}
      />
      <View style={[{ height: height / 7 }, styles.bottomView]}>
        <View style={styles.prices}>
          <Text style={styles.price}>
            {startDate && endDate
              ? `${calculateTotalPrice(
                  item.priceForRegularDays,
                  item.priceForWeekends,
                  startDate,
                  endDate
                )} UZS`
              : "Summani ko'rish"}
          </Text>
          <Text>
            {startDate && endDate ? "Umumiy narxi" : "uchun sanalarni tanlang!"}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            if (!startDate || !endDate) {
              showMessage({
                message: "Sanalarni kiriting!",
                type: "danger",
              });
              return;
            }

            navigation.navigate(
              ...([
                "confirm",
                {
                  params: route.params,
                  startDate,
                  endDate,
                },
              ] as never)
            );
          }}
          style={{
            backgroundColor: Colors[colorScheme ?? "light"].text,
            width: "40%",
            paddingVertical: 15,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: Colors[colorScheme ?? "light"].background,
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Band qilish
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  infoTable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 30,
  },
  infoTableInformations: {
    backgroundColor: "transparent",
  },
  infoTableInformationsEnd: {
    backgroundColor: "transparent",
    alignItems: "flex-end",
  },
  startDayText: {
    textTransform: "uppercase",
    fontWeight: "500",
    marginBottom: 6,
  },
  dateText: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
  },
  dayText: {
    fontSize: 14,
    fontWeight: "500",
  },
  calendarTextStyle: {
    fontWeight: "600",
  },
  prices: {
    flexDirection: "column",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
  },
  bottomView: {
    paddingHorizontal: 24,
    paddingBottom: 50,
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BookScreen;
