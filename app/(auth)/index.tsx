import NavigationButton from "@/components/Button";
import { Text, TextInput, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Keyboard, Platform } from "react-native";
import { useRootNavigation } from "expo-router";

function Login() {
  const { t } = useTranslation();
  const navigation = useRootNavigation();

  const handleSubmit = () => {
    //@ts-ignore
    navigation?.navigate("code");
  };

  return (
    <View
      type="keyboardview"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
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
        />
      </View>

      <NavigationButton
        onPress={handleSubmit}
        style={{
          ...styles.navigationButton,
        }}
        text={t("Login")}
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
    marginTop: "auto",
    marginBottom: 50
  },
});

export default Login;
