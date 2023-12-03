import { useColorScheme, Platform } from "react-native";
if (Platform.OS === "web") {
  //@ts-ignore
  global._frameTimestamp = null;
}
import Bugsnag from '@bugsnag/expo';
import "react-native-reanimated";
import "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import "@/i18n";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { i18init } from "@/i18n";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/state/store";
import { QueryClient, QueryClientProvider } from "react-query";
import FlashMessage from "react-native-flash-message";
Bugsnag.start();


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(auth)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    (async function () {
      let lang = await AsyncStorage.getItem("lang");
      i18init(lang);
      if (loaded) {
        SplashScreen.hideAsync();
      }
    })();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack initialRouteName="(tabs)">
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(shared)" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{ presentation: "modal", title: t("Select language") }}
              />
            </Stack>
            <FlashMessage position="top" />
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
