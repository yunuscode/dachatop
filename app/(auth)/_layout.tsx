import { Stack, Link, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="language"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="code"
        options={{
          title: "",
          headerLeft: () => {
            const navigation = useNavigation();

            return (
              <Pressable onPress={navigation.goBack}>
                {({ pressed }) => (
                  <AntDesign
                    name="arrowleft"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            );
          },
        }}
      />
    </Stack>
  );
}
