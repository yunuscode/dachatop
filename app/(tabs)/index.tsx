import { StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ScrollView, Text, TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import Badge from "@/components/Badge";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const [activeBadge, setActiveBadge] = useState(0);

  const fakeBadges = ["Eng mashxur", "Eng yangi", "Eng arzon"];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchInputView}>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          size={24}
          color={Colors[colorScheme ?? "light"].text}
        />
        <TextInput placeholder="Qidirish" style={styles.searchInput} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.optionsMenu}
      >
        {fakeBadges.map((item: string, index: number) => {
          return (
            <Badge
              key={index}
              onPress={() => setActiveBadge(index)}
              text={item}
              isActive={index === activeBadge}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  searchInput: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexGrow: 1,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 50,
  },
  searchInputView: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute", // Set the icon to absolute position
    left: 15, // Adjust the left position as needed
    top: "50%", // Center the icon vertically within the container
    transform: [{ translateY: -12 }],
    zIndex: 5,
  },
  optionsMenu: {
    flexGrow: 1,
    zIndex: 5,
    marginTop: 15,
  },
});
