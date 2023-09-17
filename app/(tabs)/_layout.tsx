import { Octicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "@/components/Themed";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useEffect } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Octicons>["name"];
  color: string;
}) {
  return <Octicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const state = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("test", state);

    if (!state.isLoggedIn) {
      // @ts-ignore
      navigation.navigate("(auth)");
    }
  }, [state]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bosh sahifa",
          headerTitle: "",
          header: Header,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saqlanganlar",
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}

function Header() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        paddingTop: (StatusBar?.currentHeight || 0) + 60,
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Text
        style={{
          width: "80%",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        O’zingiz uchun eng yaxshi joyni tanlang!
      </Text>
      <FontAwesome5
        name="bell"
        size={28}
        color={Colors[colorScheme ?? "light"].text}
        style={{
          opacity: 1,
          marginTop: 10,
        }}
      />
    </View>
  );
}
