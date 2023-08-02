import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Text, useThemeColor } from "./Themed";

type BadgePropsType = {
  text: string;
  isActive: boolean;
};

export type BadgeProps = BadgePropsType & PressableProps;

export default function Badge(props: BadgeProps) {
  const { text, isActive, style, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    {},
    isActive ? "activeButtonBackground" : "buttonBackground"
  );
  const color = useThemeColor({ light: isActive ? "#fff" : "#000" }, "text");

  return (
    <Pressable
      style={[
        { backgroundColor },
        !isActive
          ? defaultBadgeStyles.badgeButton
          : defaultBadgeStyles.activeBadgeButton,
        style as StyleProp<ViewStyle>,
      ]}
      {...otherProps}
    >
      <Text style={[{ color }, defaultBadgeStyles.textStyle]}>{text}</Text>
    </Pressable>
  );
}

export const defaultBadgeStyles = StyleSheet.create({
  badgeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 8,
  },
  activeBadgeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 32,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ffffff00"
  },
  textStyle: {
    fontWeight: "500"
  }
});
