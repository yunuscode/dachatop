import NavigationButton from "@/components/Button";
import { Text, TextInput, View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import { StyleSheet, Platform, Alert, Pressable, Linking } from "react-native";
import { useRootNavigation } from "expo-router";
import { useState } from "react";
import useLogin from "@/api/useLogin";
import { useDispatch } from "react-redux";
import { setOTPCodeId } from "@/actions/user";
import { showMessage } from "react-native-flash-message";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { t } = useTranslation();
  const navigation = useRootNavigation();
  const { login } = useLogin();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (phoneNumber.length === 9) {
      setLoading(true);
      login(phoneNumber)
        .then((data) => {
          console.log(navigation);
          if (data?.otpCodeId?.length) {
            dispatch(setOTPCodeId(data?.otpCodeId));
            // @ts-ignore
            navigation?.navigate("code");
          } else {
            throw new Error("request error");
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error?.response?.data?.message == "USER_DELETED") {
              return showMessage({
                message: t("userIsDeleted"),
                type: "danger",
              });
            }
          }
          showMessage({
            message: t("BlockedOrServerDown"),
            type: "danger",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <View
      type="keyboardview"
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.loginWithPhoneNumberText}>
        {t("Login with phone number")}
      </Text>
      <Text style={styles.pleaseEnterYourPhoneNumberText} color="grayText">
        {t("Please enter your phone number")}
      </Text>
      <View style={styles.phoneNumberView}>
        <View color="grayBackground" style={styles.countryCodeWrapper}>
          <Text style={styles.countryCodeText}>+998</Text>
        </View>
        <TextInput
          autoFocus
          placeholder={t("Phone number")}
          keyboardType="number-pad"
          style={styles.phoneNumberInput}
          maxLength={9}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
      </View>
      <Pressable onPress={() => {
        navigation?.navigate("tabone" as never)
      }} style={{ marginTop: 10}}>
        <Text style={{
          fontSize: 16,
          fontWeight: "600",
          textAlign: "right",
        }}>
          {t("Browse_as_Guest")}
        </Text>
      </Pressable>
      <View
        style={{
          marginTop: "auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text
          color="grayText"
          style={{
            marginTop: "auto",
            fontSize: 13,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          By clicking "Login" you agree to our{" "}
        </Text>
        <Pressable
          onPress={() => {
            Linking.canOpenURL(
              "https://docs.google.com/document/d/1VKaPPrBcncBPHyqf0k4FylIJro0jhU9pGe-zLGOcii4/edit?usp=sharing"
            ).then((supported) => {
              if (supported) {
                Linking.openURL(
                  "https://docs.google.com/document/d/1VKaPPrBcncBPHyqf0k4FylIJro0jhU9pGe-zLGOcii4/edit?usp=sharing"
                );
              } else {
                console.log("Don't know how to open URI: ");
              }
            });
          }}
          style={{ alignItems: "center", justifyContent: "center", padding: 0 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            Terms of Service
          </Text>
        </Pressable>
      </View>

      <NavigationButton
        disabled={loading}
        onPress={handleSubmit}
        style={{
          ...styles.navigationButton,
        }}
        text={loading ? t("Loading") : t("Login")}
        textStyle={styles.navigationButtonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  loginWithPhoneNumberText: {
    width: "60%",
    fontSize: 24,
    fontWeight: "bold",
  },
  pleaseEnterYourPhoneNumberText: {
    marginTop: 8,
    fontSize: 16,
  },
  countryCodeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  countryCodeWrapper: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  phoneNumberView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  phoneNumberInput: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexGrow: 1,
    marginLeft: 5,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "500",
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  navigationButton: {
    paddingVertical: 16,
    borderRadius: 32,
    marginTop: 20,
    marginBottom: 50,
  },
});

export default Login;
