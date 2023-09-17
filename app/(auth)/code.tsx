import { setUserToken } from "@/actions/user";
import useLogin from "@/api/useLogin";
import NavigationButton from "@/components/Button";
import { Text, TextInput, View } from "@/components/Themed";
import { RootState } from "@/state/store";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Keyboard, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "react-native-flash-message";

function Login() {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // custom hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { verifyCode } = useLogin();

  // Redux selector
  const user = useSelector((state: RootState) => state.user);

  const handleClick = () => {
    if (code?.length && user.otpCodeId?.length) {
      setLoading(true);
      verifyCode(user.otpCodeId, code)
        .then(({ data }) => {
          if (data?.token) {
            console.log(data);
            dispatch(setUserToken(data.token, data.user_role));
          }
        })
        .catch((e) => {
          showMessage({
            message: t("OtpCodeIsIncorrect"),
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
          onChangeText={(text) => setCode(text)}
          value={code}
          autoComplete="sms-otp" // android
          textContentType="oneTimeCode" // ios
        />
      </View>

      <NavigationButton
        onPress={handleClick}
        style={{
          ...styles.navigationButton,
        }}
        disabled={loading}
        text={loading ? t("Loading") : t("Confirm")}
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
    marginBottom: 50,
  },
});

export default Login;
