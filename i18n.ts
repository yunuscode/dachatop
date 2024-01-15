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
      selectadate: "Select a date",
      toseetheamount: "to see the amount",
      filldates: "Fill the dates!",
      price_overview: "Price overview",
      total_price: "Total price",
      price_for_reservation: "Price for reservation",
      price_entering: "Price you pay when you enter",
      informations: "Informations",
      payment_options: "Payment options",
      cancellation_policy: "Cancellation policy",
      pay: "Pay",
      warning_text: `You've booked and reached the payment part!\nThe reservation is canceled if you do not pay within 10 minutes\norganization. The following payment must be made and returned\nThe page was automatically refreshed when you arrived.`,
      warning_title: "Warning!",
      WAITING_PAYMENT: "Waiting for payment",
      book_success: "Successfully booked!",
      order_number: "Order number",
      enter_time: "Enter time",
      leave_time: "Leave time",
      payment_status: "Payment status",
      pay_with_payme: "Pay with Payme",
      select_dates: "Select dates",
      confirm: "Confirm",
      popular: "Popular",
      expensive: "Expensive",
      cheapest: "Cheapest",
      popular_text: "Popular first",
      expensive_text: "Expensive first",
      cheapest_text: "Cheapest first",
      search: "Search...",
      main: "Main page",
      booked: "Booked",
      profile: "Profile",
      main_text: "Choose the best on \nof the places for you!",
      change_informations: "Change informations",
      select_language: "Change language",
      contact: "Contact",
      logout: "Logout",
      status: "Status",
      call: "Telefon qilish",
      open_location: "Lokatsiya",
      userIsDeleted: "This account is deleted, please contact support!",
      booking_info: "Booking info",
      Browse_as_Guest: "Browse as Guest",
    },
  },
  ru: {
    translation: {
      "Welcome to React": "Добро пожаловать в React и react-i18next",
      "Select language": "Выберите язык",
      "Login with phone number": "Войти с номером телефона",
      "Please enter your phone number": "Пожалуйста, введите номер телефона",
      "Phone number": "Номер телефона",
      "Login": "Вход",
      "Confirm OTP code": "Подтвердите код OTP",
      "We've sent OTP code to your phone number. Please enter it.": "Мы отправили код OTP на ваш номер телефона. Пожалуйста, введите его.",
      "Confirm": "Подтвердить",
      "Loading": "Загрузка...",
      "BlockedOrServerDown": "Ваш телефон заблокирован или сервер недоступен",
      "OtpCodeIsIncorrect": "Неверный код OTP, вернитесь и отправьте снова",
      "rooms": "Комнаты",
      "summerPool": "Летний бассейн",
      "winterPool": "Зимний бассейн",
      "forWhom": "Для кого",
      "ONLY_FAMILY": "Только для семей",
      "ONLY_ONE_GENDER": "Только для женской или мужской группы",
      "ONLY_ONE_GENDER_AND_FAMILY": "Только для семей, женской или мужской группы",
      "wifi": "WI-FI",
      "mangal": "Мангал",
      "tandir": "Тандыр",
      "alcohol": "Алкоголь",
      "playstation": "PlayStation",
      "turkeySauna": "Турецкая сауна",
      "smallBeds": "Маленькие кровати",
      "kingBeds": "Королевские кровати",
      "karoake": "Караоке",
      "billiard": "Бильярд",
      "tableTennis": "Настольный теннис",
      "tennis": "Теннис",
      "stadium": "Стадион",
      "tableFootball": "Настольный футбол",
      "baths": "Бани",
      "available": "Доступно",
      "allowed": "Разрешено",
      "totalPrice": "Общая стоимость",
      "getabook": "Забронировать",
      "selectadate": "Выберите дату",
      "toseetheamount": "чтобы увидеть сумму",
      "filldates": "Заполните даты!",
      "price_overview": "Обзор цен",
      "total_price": "Общая стоимость",
      "price_for_reservation": "Цена за бронирование",
      "price_entering": "Цена при входе",
      "informations": "Информация",
      "payment_options": "Варианты оплаты",
      "cancellation_policy": "Политика отмены",
      "pay": "Оплатить",
      "warning_text": "Вы забронировали и перешли к оплате!\nБронирование будет отменено, если вы не оплатите в течение 10 минут\nорганизации. Следующий платеж должен быть сделан и возвращен\nСтраница была автоматически обновлена при входе.",
      "warning_title": "Предупреждение!",
      "WAITING_PAYMENT": "Ожидание оплаты",
      "book_success": "Успешно забронировано!",
      "order_number": "Номер заказа",
      "enter_time": "Время входа",
      "leave_time": "Время выхода",
      "payment_status": "Статус оплаты",
      "pay_with_payme": "Оплатить через Payme",
      "select_dates": "Выберите даты",
      "confirm": "Подтвердить",
      "popular": "Популярное",
      "expensive": "Дорогое",
      "cheapest": "Самое дешевое",
      "popular_text": "Сначала популярные",
      "expensive_text": "Сначала дорогие",
      "cheapest_text": "Сначала дешевые",
      "search": "Поиск...",
      "main": "Главная страница",
      "booked": "Забронировано",
      "profile": "Профиль",
      "main_text": "Выберите лучшее место для себя!",
      "change_informations": "Изменить информацию",
      "select_language": "Изменить язык",
      "contact": "Контакты",
      "logout": "Выйти",
      status: "Статус",
      call: "Позвонить",
      open_location: "Локация",
      "PAID": "Оплачено",
      booking_info: "Информация о бронировании",
      Browse_as_Guest: "Просмотр как гость",
    },
  },
  uz: {
    translation: {
      "Welcome to React": "React va react-i18next-ga xush kelibsiz",
      "Select language": "Tilni tanlang",
      "Login with phone number": "Telefon raqam bilan kirish",
      "Please enter your phone number": "Iltimos, telefon raqamingizni kiriting",
      "Phone number": "Telefon raqami",
      "Login": "Kirish",
      "Confirm OTP code": "OTP-kodni tasdiqlang",
      "We've sent OTP code to your phone number. Please enter it.": "Biz OTP-kodni telefon raqamingizga yubordik. Iltimos, uni kiriting.",
      "Confirm": "Tasdiqlash",
      "Loading": "Yuklanmoqda...",
      "BlockedOrServerDown": "Telefoningiz bloklangan yoki serverda muammo bor",
      "OtpCodeIsIncorrect": "OTP-kod noto'g'ri, qaytadan yuborib ko'ring",
      "rooms": "Xonalar",
      "summerPool": "Yozgi basseyn",
      "winterPool": "Qishki basseyn",
      "forWhom": "Kimlar uchun",
      "ONLY_FAMILY": "Faqat oilaga",
      "ONLY_ONE_GENDER": "Faqat ayollar guruhi yoki erkaklar guruhiga",
      "ONLY_ONE_GENDER_AND_FAMILY": "Faqat oila, faqat ayollar guruh yoki erkaklar guruhiga",
      "wifi": "WI-FI",
      "mangal": "Mangal",
      "tandir": "Tandir",
      "alcohol": "Spirtli ichimliklar",
      "playstation": "PlayStation",
      "turkeySauna": "Turk hammomi",
      "smallBeds": "Kichik yotoqlar",
      "kingBeds": "Shah yotoqlar",
      "karoake": "Karaoke",
      "billiard": "Bilyard",
      "tableTennis": "Stol tennis",
      "tennis": "Tennis",
      "stadium": "Stadion",
      "tableFootball": "Stol futbol",
      "baths": "Hamomlar",
      "available": "Mavjud",
      "allowed": "Ruxsat berilgan",
      "totalPrice": "Umumiy narx",
      "getabook": "Band qilish",
      "selectadate": "Sana tanlang",
      "toseetheamount": "miqdorni ko'rish uchun",
      "filldates": "Sanani kiriting!",
      "price_overview": "Narxlar tafsiloti",
      "total_price": "Umumiy narx",
      "price_for_reservation": "Band qilish uchun narx",
      "price_entering": "Kirish narxi",
      "informations": "Ma'lumotlar",
      "payment_options": "To'lov variantlari",
      "cancellation_policy": "Bekor qilish siyosati",
      "pay": "To'lash",
      "warning_text": "Siz muvaffaqiyatli band qilib, to'lov qismiga yetdingiz!\nAgar 10 daqiqa ichida to'lanmagan holda, buyurtma bekor qilinadi\nTo'lov to'langanda bu haqida SMS xabar olasiz.",
      "warning_title": "Eslatma!",
      "WAITING_PAYMENT": "To'lovni kutmoqda",
      "book_success": "Muvaffaqiyatli band qilindi!",
      "order_number": "Buyurtma raqami",
      "enter_time": "Kirish vaqti",
      "leave_time": "Chiqish vaqti",
      "payment_status": "To'lov holati",
      "pay_with_payme": "Payme orqali to'lash",
      "select_dates": "Sanalarni tanlang",
      "confirm": "Tasdiqlash",
      "popular": "Ommabop",
      "expensive": "Qimmat",
      "cheapest": "Arzon",
      "popular_text": "Avval mashhurlari",
      "expensive_text": "Avval qimmatlari",
      "cheapest_text": "Avval arzonlari",
      "search": "Qidiruv...",
      "main": "Asosiy sahifa",
      "booked": "Band qilingan",
      "profile": "Profil",
      "main_text": "O'zingiz uchun eng \nyaxshi joyni tanlang!",
      "change_informations": "Ma'lumotlarni o'zgartirish",
      "select_language": "Tilni o'zgartirish",
      "contact": "Bog'lanish",
      "logout": "Chiqish",
      status: "Status",
      call: "Telefon qilish",
      open_location: "Lokatsiya",
      booking_info: "Band qilish haqida ma'lumot",
      "PAID": "To'langan",
      Browse_as_Guest: "Mehmon sifatida ko'rish",
    }
    ,
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
