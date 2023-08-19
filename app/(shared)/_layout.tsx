import { Stack, Link, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function SharedLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="notifications"
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
      <Stack.Screen
        name="book"
        options={{
          title: "Kunlarni tanlash",
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
        name="details"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => {
            const navigation = useNavigation();

            return (
              <Pressable onPress={navigation.goBack} style={{
                backgroundColor: Colors[colorScheme ?? 'light'].background,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 15,
                padding: 10,
                borderRadius: 50
              }}>
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
          headerRight: () => {
            const navigation = useNavigation();

            return (
              <Pressable onPress={navigation.goBack} style={{
                backgroundColor: Colors[colorScheme ?? 'light'].background,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                padding: 10,
                borderRadius: 50
              }}>
                {({ pressed }) => (
                  <AntDesign
                    name="heart"
                    size={25}
                    color={"#FF5C5C"}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            );
          }
        }}
      />
    </Stack>
    
  );
}
