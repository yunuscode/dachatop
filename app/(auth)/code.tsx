import NavigationButton from "@/components/Button";
import { Text, TextInput, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Keyboard, Platform } from "react-native";

function Login() {
  const { t } = useTranslation();

  return (
    <View
      type="keyboardview"
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.loginWithPhoneNumberText}>
        {t("Confirm OTP code")}
      </Text>
      <Text style={styles.pleaseEnterYourPhoneNumberText} color="grayText">
        {t("We've sent OTP code to your phone number. Please enter it.")}
      </Text>
      <View style={styles.phoneNumberView}>
        <TextInput
          autoFocus
          placeholder={t("OTP code")}
          keyboardType="number-pad"
          style={styles.phoneNumberInput}
          maxLength={9}
        />
      </View>

      <NavigationButton
        style={{
          ...styles.navigationButton,
        }}
        text={t("Confirm")}
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
    width: "80%",
    fontSize: 24,
    fontWeight: "bold",
  },
  pleaseEnterYourPhoneNumberText: {
    marginTop: 8,
    fontSize: 16,
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
    marginTop: "auto",
    marginBottom: 50
  },
});

export default Login;
