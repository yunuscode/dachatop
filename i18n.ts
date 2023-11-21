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
      Loading: "Loading...",
      BlockedOrServerDown: "Your phone is blocked or server is down",
      OtpCodeIsIncorrect: "OTP code is incorrect, go back and resend again",
      rooms: "Rooms",
      summerPool: "Summer pool",
      winterPool: "Winter pool",
      forWhom: "For whom",
      ONLY_FAMILY: "Only for family",
      ONLY_ONE_GENDER: "Only for female group or male group",
      ONLY_ONE_GENDER_AND_FAMILY: "Only for family, female group or male group",
      wifi: "WI-FI",
      mangal: "Mangal",
      tandir: "Tandir",
      alcohol: "Alcohol",
      playstation: "Playstation",
      turkeySauna: "Turkish sauna",
      smallBeds: "Small beds",
      kingBeds: "King beds",
      karoake: "Karoaka",
      billiard: "Billiard",
      tableTennis: "Table tennis",
      tennis: "Tennis",
      stadium: "Stadium",
      tableFootball: "Table football",
      baths: "Baths",
      available: "Available",
      allowed: "Allowed",
      totalPrice: "Total price",
      getabook: "Book",
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
      Loading: "Loading...",
      BlockedOrServerDown: "Your phone is blocked or server is down",
      OtpCodeIsIncorrect: "OTP code is incorrect, go back and resend again",
      rooms: "Rooms",
      summerPool: "Summer pool",
      winterPool: "Winter pool",
      forWhom: "For whom",
      ONLY_FAMILY: "Only for family",
      ONLY_ONE_GENDER: "Only for female group or male group",
      ONLY_ONE_GENDER_AND_FAMILY: "Only for family, female group or male group",
      wifi: "WI-FI",
      mangal: "Mangal",
      tandir: "Tandir",
      alcohol: "Alcohol",
      playstation: "Playstation",
      turkeySauna: "Turkish sauna",
      smallBeds: "small bed",
      kingBeds: "King bed",
      karoake: "Karoaka",
      billiard: "Billiard",
      tableTennis: "Table tennis",
      tennis: "Tennis",
      stadium: "Stadium",
      tableFootball: "Table football",
      baths: "Baths",
      available: "Available",
      allowed: "Allowed",
      totalPrice: "Total price",
      getabook: "Book",
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
      Loading: "Yuklanmoqda...",
      BlockedOrServerDown:
        "Telefon raqamingiz bloklangan yoki serverga ulanib bo'lmayabdi",
      OtpCodeIsIncorrect:
        "SMS kod xato kiritildi, orqaga qaytib qaytadan yuboring",
      rooms: "Xonalar soni:",
      summerPool: "Yozgi basseyn",
      winterPool: "Qishki basseyn",
      forWhom: "Kimlar uchun",
      ONLY_FAMILY: "Faqat oila uchun",
      ONLY_ONE_GENDER: "Ayollar kollektivi yoki erkaklar kollektivi uchun",
      ONLY_ONE_GENDER_AND_FAMILY: "Oila yoki erkaklar / ayollar kollektivi",
      wifi: "WI-FI",
      mangal: "Mangal",
      tandir: "Tandir",
      alcohol: "Alkogol",
      playstation: "Playstation",
      turkeySauna: "Turkcha sauna",
      smallBeds: "Bir kishilik krovat",
      kingBeds: "Ikki kishilik krovat",
      karoake: "Karoaka",
      billiard: "Billiard",
      tableTennis: "Stol tennisi",
      tennis: "Tennis",
      stadium: "Stadion",
      tableFootball: "Stol futboli",
      baths: "Sanuzel",
      available: "bor",
      allowed: "Ruxsat",
      totalPrice: "Umumiy narx",
      getabook: "Ijaraga olish",
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
