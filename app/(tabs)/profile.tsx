import { Linking, Pressable, StyleSheet, useColorScheme } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setUserToken } from "@/actions/user";
import { router, useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useUser from "@/api/useUser";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { getMe } = useUser();
  const [name, setName] = useState("Yuklanyabdi...");
  const [phone, setPhone] = useState("Yuklanyabdi...");

  const logOut = () => {
    dispatch(setUserToken("", ""));
  };

  useEffect(() => {
    fetchUser();

    return navigation?.addListener("focus", () => {
      fetchUser();
    });
  }, []);

  const fetchUser = () => {
    getMe().then((data) => {
      if (data) {
        setName(data.user.name);
        setPhone(data.user.phone);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>YY</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text color="grayText" style={styles.phone}>
        +{phone}
      </Text>

      <Pressable
        style={styles.firstButton}
        onPress={() => {
          router.push("edit" as never);
        }}
      >
        <View style={styles.iconView}>
          <Ionicons name="list" color="#fff" size={20} />
        </View>
        <View style={styles.informations}>
          <Text style={styles.buttonTitle}>{t("change_informations")}</Text>
          <Ionicons
            name="chevron-forward"
            color={colorScheme === "dark" ? "#fff" : "#000"}
            size={22}
          />
        </View>
      </Pressable>
      {/* <Pressable
        style={[
          styles.button,
          {
            borderTopColor: colorScheme === "dark" ? "#ffffffaa" : "#00000011",
          },
        ]}
      >
        <View style={styles.iconView}>
          <Ionicons name="calendar" color="#fff" size={20} />
        </View>
        <View style={styles.informations}>
          <Text style={styles.buttonTitle}>Band qilingan buyurtmalar</Text>
          <Ionicons
            name="chevron-forward"
            color={colorScheme === "dark" ? "#fff" : "#000"}
            size={22}
          />
        </View>
      </Pressable> */}
      <Pressable
        onPress={() => {
          navigation?.navigate("modal" as never);
        }}
        style={[
          styles.button,
          {
            borderTopColor: colorScheme === "dark" ? "#ffffffaa" : "#00000011",
          },
        ]}
      >
        <View style={styles.iconView}>
          <Ionicons name="language" color="#fff" size={20} />
        </View>
        <View style={styles.informations}>
          <Text style={styles.buttonTitle}>{t("select_language")}</Text>
          <Ionicons
            name="chevron-forward"
            color={colorScheme === "dark" ? "#fff" : "#000"}
            size={22}
          />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          Linking.canOpenURL(
            "https://adventurous-powerpoint-377587.framer.app/support"
          ).then((supported) => {
            if (supported) {
              Linking.openURL(
                "https://adventurous-powerpoint-377587.framer.app/support"
              );
            } else {
              console.log("Don't know how to open URI: ");
            }
          });
        }}
        style={[
          styles.lastButton,
          {
            borderTopColor: colorScheme === "dark" ? "#ffffffaa" : "#00000011",
          },
        ]}
      >
        <View style={styles.iconView}>
          <Ionicons name="call" color="#fff" size={20} />
        </View>
        <View style={styles.informations}>
          <Text style={styles.buttonTitle}>{t("contact")}</Text>
          <Ionicons
            name="chevron-forward"
            color={colorScheme === "dark" ? "#fff" : "#000"}
            size={22}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={logOut}
        style={[
          styles.exitButton,
          {
            borderTopColor: colorScheme === "dark" ? "#ffffffaa" : "#00000011",
          },
        ]}
      >
        <View style={styles.iconView}>
          <Ionicons name="exit" color="#fff" size={20} />
        </View>
        <View style={styles.informations}>
          <Text style={styles.buttonTitle}>{t("logout")}</Text>
          <Ionicons
            name="chevron-forward"
            color={colorScheme === "dark" ? "#fff" : "#000"}
            size={22}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: "#0064E599",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  avatarText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },
  phone: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "500",
  },
  iconView: {
    padding: 5,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  firstButton: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  lastButton: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
    borderEndStartRadius: 8,
    borderTopColor: "#00000011",
    borderTopWidth: 1,
    borderEndEndRadius: 8,
  },
  exitButton: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
    borderRadius: 8,
    marginTop: "auto",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
  },
  informations: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
