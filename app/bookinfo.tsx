import { Text, View } from "@/components/Themed";
import calculateTotalPrice from "@/utils/priceCalculator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Image, Linking, Pressable, StyleSheet } from "react-native";

export default function BookingInformationScreen() {
  const router = useRoute();
  const { t } = useTranslation();

  const { booking, item, payment } = router.params as any;

  const paymeClick = () => {
    Linking.canOpenURL(payment.paymeUrl).then(() => {
      Linking.openURL(payment.paymeUrl);
    });
  };

  const call = () => {
    Linking.canOpenURL(`tel:${item.phone_number}`).then(() => {
      Linking.openURL(`tel:${item.phone_number}`);
    });
  };

  const openNavigation = () => {
    Linking.canOpenURL(
      `yandexmaps://maps.yandex.com/?pt=${item.latitude}, ${item.longitude}&z=12`
    ).then((can) => {
      if (can) {
        Linking.openURL(
          `yandexmaps://maps.yandex.com/?pt=${item.latitude}, ${item.longitude}&z=12`
        );
      } else {
        Linking.openURL(
          `https://maps.yandex.com/?pt=${item.latitude}, ${item.longitude}&z=12`
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("book_success")}</Text>
      <View style={styles.cheque}>
        <View style={styles.chequeRow}>
          <Text style={styles.chequeTitle}>{t("order_number")}:</Text>
          <Text style={styles.chequeInfo}>
            #{booking.id.slice(booking.id.length - 5)}
          </Text>
        </View>
      </View>
      <View style={styles.cheque}>
        <View style={styles.chequeRow}>
          <Text style={styles.chequeTitle}>{t("enter_time")}:</Text>
          <Text style={styles.chequeInfo}>
            {moment(booking.startDate).format("LL")}, {item?.entryTime}
          </Text>
        </View>
      </View>
      <View style={styles.cheque}>
        <View style={styles.chequeRow}>
          <Text style={styles.chequeTitle}>{t("leave_time")}:</Text>
          <Text style={styles.chequeInfo}>
            {moment(booking.endDate).format("LL")}, {item?.leaveTime}
          </Text>
        </View>
      </View>
      <View style={styles.cheque}>
        <View style={styles.chequeRow}>
          <Text style={styles.chequeTitle}>{t("price_for_reservation")}:</Text>
          <Text style={styles.chequeInfo}>
            {Math.ceil((booking.price / 100) * 15)} UZS
          </Text>
        </View>
      </View>
      <View style={styles.cheque}>
        <View style={styles.chequeRow}>
          <Text style={styles.chequeTitle}>{t("price_entering")}:</Text>
          <Text style={styles.chequeInfo}>
            {booking.price - Math.ceil((booking.price / 100) * 15)} UZS
          </Text>
        </View>
      </View>
      <View style={styles.cheque}>
        <View style={styles.chequeRow}>
          <Text style={styles.chequeTitle}>{t("payment_status")}:</Text>
          <Text style={styles.chequeInfo}>{t(booking.status)}</Text>
        </View>
      </View>
      {booking.status == "WAITING_PAYMENT" && (
        <View style={styles.warning}>
          <Text style={styles.warningTitle}>{t("warning_title")}:</Text>
          <Text>{t("warning_text")}</Text>
        </View>
      )}
      {booking.status == "WAITING_PAYMENT" && (
        <View style={styles.bottomView}>
          <Pressable
            onPress={() => {
              paymeClick();
            }}
            style={styles.paymeButton}
          >
            <Text style={styles.paymeText}>{t("pay_with_payme")}</Text>
          </Pressable>
          <Pressable style={styles.uzumButton}>
            <Text style={styles.uzumText}>Uzumbank orqali to'lash</Text>
          </Pressable>
        </View>
      )}
      {booking.status == "PAID" && (
        <View
          style={{
            marginTop: "auto",
            marginBottom: 60,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Pressable
            onPress={() => {
              call();
            }}
            style={{
              padding: 14,
              borderRadius: 8,
              flexGrow: 1,
              borderColor: "#00000044",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {t("call")}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              openNavigation()
            }}
            style={{
              padding: 14,
              borderRadius: 8,
              backgroundColor: "#0064E5",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
                color: "#ffffff",
                marginRight: 10,
              }}
            >
              {t("open_location")}
            </Text>
            <MaterialCommunityIcons
              name="navigation-variant-outline"
              size={24}
              color="#ffffff"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 20,
  },
  cheque: {
    marginTop: 4,
  },
  chequeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chequeTitle: {
    fontWeight: "500",
  },
  chequeInfo: {
    fontSize: 16,
    fontWeight: "500",
  },
  warning: {
    backgroundColor: "#FFBA5544",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  paymeButton: {
    backgroundColor: "#33CCCC",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  paymeText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  uzumButton: {
    backgroundColor: "#740cfe",
    padding: 14,
    borderRadius: 8,
  },
  uzumText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  bottomView: {
    marginTop: "auto",
    marginBottom: 60,
  },
});
