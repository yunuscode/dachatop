import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import CancelIcon from "@/icons/cancelIcon";
import CardIcon from "@/icons/cardIcon";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { MotiView } from "moti";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";

function ConfirmScreen() {
  const height = Dimensions.get("window").height;
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const route: any = useRoute();
  const [showPaymentMethods, setShowPaymentMethods] = useState<boolean>(false);
  const [showCancelPolicy, setShowCancelPolicy] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <Image
          source={{ uri: route.params.params.params.images[0].uri }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{route.params.params.params.title}</Text>
          <Text color="grayText" style={styles.dates}>
            23 - 26 avgust uchun, 2023
          </Text>
          <Text style={styles.price}>14 mln so'm</Text>
        </View>
      </View>
      <View style={styles.pricingInformations}>
        <Text style={styles.pricingInformationsTitle}>Narxlar tafsiloti</Text>
        <View style={styles.priceView}>
          <Text color="grayText" style={styles.priceViewTitle}>
            Umumiy narxi:
          </Text>
          <Text style={styles.priceViewSum}>14.000.000 so'm</Text>
        </View>
        <View style={styles.priceView}>
          <Text color="grayText" style={styles.priceViewTitle}>
            Band qilish uchun to'lov:
          </Text>
          <Text style={styles.priceViewSum}>2.000.000 so'm</Text>
        </View>
        <View style={styles.priceView}>
          <Text color="grayText" style={styles.priceViewTitle}>
            Kirayotganda qilinadigan to'lov:
          </Text>
          <Text style={styles.priceViewSum}>12.000.000 so'm</Text>
        </View>
      </View>
      <Pressable
        onPress={() => setShowPaymentMethods(!showPaymentMethods)}
        style={styles.pricingInformationsPayment}
      >
        <Text style={styles.pricingInformationsTitle}>Ma'lumotlar</Text>
        <View style={styles.accordionWrapper}>
          <View style={styles.iconWrapper}>
            <CardIcon />
          </View>
          <Text style={styles.accordionText}>To'lov turlarini ko'rish</Text>
          <View style={styles.accordionIcon}>
            <MotiView
              animate={{
                transform: [{ rotate: showPaymentMethods ? "90deg" : "0deg" }],
              }}
            >
              <AntDesign
                name="right"
                size={20}
                color={
                  showPaymentMethods
                    ? colorScheme === "light"
                      ? "black"
                      : "white"
                    : "#A1A8B0"
                }
              />
            </MotiView>
          </View>
        </View>
        <MotiView
          animate={{
            marginVertical: showPaymentMethods ? 10 : 0,
          }}
        >
          {showPaymentMethods && (
            <Text>
              Tizimiziz ayni paytda Payme va Uzumbank to'lovlarini qo'llab
              quvvatlaydi.
            </Text>
          )}
        </MotiView>
      </Pressable>
      <Pressable
        onPress={() => setShowCancelPolicy(!showCancelPolicy)}
        style={styles.pricingInformationsCancel}
      >
        <View style={styles.accordionWrapper}>
          <View style={styles.cancelIconWrapper}>
            <CancelIcon />
          </View>
          <Text style={styles.accordionText}>Bekor qilish siyosati</Text>
          <View style={styles.accordionIcon}>
            <MotiView
              animate={{
                transform: [{ rotate: showCancelPolicy ? "90deg" : "0deg" }],
              }}
            >
              <AntDesign
                name="right"
                size={20}
                color={
                  showCancelPolicy
                    ? colorScheme === "light"
                      ? "black"
                      : "white"
                    : "#A1A8B0"
                }
              />
            </MotiView>
          </View>
        </View>
        <MotiView
          animate={{
            marginVertical: showCancelPolicy ? 10 : 0,
          }}
        >
          {showCancelPolicy && (
            <Text>
              Bepul bekor qilish sanasidan keyin bekor qilsangiz "Band qilish
              uchun to'lov" summasi qaytarilmaydi.
            </Text>
          )}
        </MotiView>
      </Pressable>
      <View
        style={{
          height: 2,
          marginTop: "auto",
          backgroundColor: Colors[colorScheme ?? "light"].borderColor,
        }}
      />
      <View style={[{ height: height / 7 }, styles.bottomView]}>
        <View style={styles.prices}>
          <Text style={styles.price2}>2 mln</Text>
          <Text>Oldindan to'lov</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate(
              "cheque" as never
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
            To'lov qilish
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: "40%",
    height: 100,
    borderRadius: 8,
  },
  board: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  dates: {
    fontSize: 14,
    marginTop: 6,
  },
  price: {
    color: "#0064E5",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 6,
  },
  pricingInformations: {
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 20,
  },
  pricingInformationsCancel: {
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 10,
    paddingTop: 10,
  },
  pricingInformationsPayment: {
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 10,
    paddingTop: 10,
  },
  pricingInformationsTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },
  priceViewTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  priceViewSum: {
    fontWeight: "600",
    fontSize: 16,
  },
  accordionWrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: "#FFBA5522",
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 10,
  },
  cancelIconWrapper: {
    padding: 10,
    backgroundColor: "#FF5C5C22",
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 10,
  },
  accordionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  accordionIcon: {
    marginLeft: "auto",
  },
  price2: {
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
  prices: {
    flexDirection: "column",
  },
});

export default ConfirmScreen;
