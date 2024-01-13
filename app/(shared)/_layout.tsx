import { Stack, Link, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { useTranslation } from "react-i18next";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function SharedLayout() {
  const colorScheme = useColorScheme();
  const { t} = useTranslation()

  return (
    <Stack>
      <Stack.Screen
        name="management"
        options={{
          title: "Management",
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
      <Stack.Screen
        name="book"
        options={{
          title: t("select_dates"),
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
      <Stack.Screen
        name="confirm"
        options={{
          title: t("confirm"),
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
      <Stack.Screen
        name="cheque"
        options={{
          title: "Tadaam!",
          headerLeft: () => {
            const navigation = useNavigation<any>();

            return (
              <Pressable onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "(tabs)" }],
                })
              }}>
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
      
      <Stack.Screen
        name="details"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => {
            const navigation = useNavigation();

            return (
              <Pressable
                onPress={navigation.goBack}
                style={{
                  backgroundColor: Colors[colorScheme ?? "light"].background,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                {({ pressed }) => (
                  <AntDesign
                    name="arrowleft"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            );
          },
          // headerRight: () => {
          //   const navigation = useNavigation();

          //   return (
          //     <Pressable onPress={navigation.goBack} style={{
          //       backgroundColor: Colors[colorScheme ?? 'light'].background,
          //       justifyContent: "center",
          //       alignItems: "center",
          //       marginLeft: 15,
          //       padding: 10,
          //       borderRadius: 50
          //     }}>
          //       {({ pressed }) => (
          //         <AntDesign
          //           name="heart"
          //           size={25}
          //           color={"#FF5C5C"}
          //           style={{ opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   );
          // }
        }}
      />
    </Stack>
  );
}
