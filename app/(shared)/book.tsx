import { Text, View } from "@/components/Themed";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
// import { Path, Svg } from "react-native-svg";
import CalendarPicker from "react-native-calendar-picker";
import { useState } from "react";
// import moment, { Moment } from "moment";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import calculateTotalPrice from "@/utils/priceCalculator";
import { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";
import moment from "moment";

function BookScreen() {
  const height = Dimensions.get("window").height;
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const route = useRoute();
  const {
    params: { item },
  } = route.params as any;

  const bookedDays = item.bookings || [];

  console.log(bookedDays);

  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();

  const dayIsBooked = (date: moment.Moment) => {
    return bookedDays.some((day: any) => {
      return (
        date.isSameOrAfter(moment(day.startDate)) &&
        date.isSameOrBefore(moment(day.endDate))
      );
    });
  };

  // const isDisabledDate = (e: Date) => {
  //   console.log(e)
  //   return false
  // }
  // moment.locale("uz");

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday
        scrollable
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        allowRangeSelection
        disabledDates={dayIsBooked}
        // disabledDates={isDisabledDate}
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
              : t("selectadate")}
          </Text>
          <Text>
            {startDate && endDate ? "Umumiy narxi" : t("toseetheamount")}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            if (!startDate || !endDate) {
              showMessage({
                message: t("filldates"),
                type: "danger",
              });
              return;
            }

            if(bookedDays.some((day: any) => {
              return (
                moment(startDate).isSameOrAfter(moment(day.startDate)) &&
                moment(endDate).isSameOrBefore(moment(day.endDate))
              );
            })) {
              showMessage({
                message: t("filldates"),
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
            {t("getabook")}
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
