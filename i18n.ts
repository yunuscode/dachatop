import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { locale } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Select language": "Select language",
      "Login with phone number": "Login with phone number",
      "Please enter your phone number": "Please enter your phone number",
      "Phone number": "Phone number",
      Login: "Login",
      "Confirm OTP code": "Confirm OTP code",
      "We've sent OTP code to your phone number. Please enter it.":
        "We've sent OTP code to your phone number. Please enter it.",
      Confirm: "Confirm",
    },
  },
  ru: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Select language": "Выберите язык",
      "Login with phone number": "Войти с номером телефона",
      "Please enter your phone number": "Пожалуйста введите ваш номер телефона",
      "Phone number": "Phone number",
      Login: "Login",
      "Confirm OTP code": "Confirm OTP code",
      "We've sent OTP code to your phone number. Please enter it.":
        "We've sent OTP code to your phone number. Please enter it.",
    },
  },
  uz: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Select language": "Tilni tanlang",
      "Login with phone number": "Telefon raqam orqali kirish",
      "Please enter your phone number":
        "Iltimos, telefon raqamingizni to'g'ri kiriting!",
      "Phone number": "Telefon raqamingiz",
      Login: "Kirish",
      "Confirm OTP code": "SMS kodni tasdiqlash",
      "We've sent OTP code to your phone number. Please enter it.":
        "Biz sizga sms orqali kod yubordik, iltimos shuni kiriting!",
      Confirm: "Tasdiqlash",
      "OTP code": "SMS kod",
    },
  },
};

export function i18init(lng: string | null) {
  return i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: lng || locale,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

i18n.on("languageChanged", (lng: string) => {
  AsyncStorage.setItem("lang", lng).catch((e) => {
    console.log(e);
  });
});

export default i18n;
