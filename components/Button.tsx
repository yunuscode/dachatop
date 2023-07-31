import { Pressable, PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import { Text, useThemeColor } from "@/components/Themed";

type NavigationButtonProps = {
  text: string;
  textStyle: StyleProp<TextStyle>
};

export type ButtonProps = PressableProps & NavigationButtonProps;

export default function NavigationButton(props: ButtonProps) {
  const { style, textStyle, ...otherProps } = props;

  const backgroundColor = useThemeColor({}, "text");
  const color = useThemeColor({}, "background");


  return (
    <Pressable style={[{backgroundColor}, style as StyleProp<ViewStyle>]} {...otherProps}>
      <Text style={[{color}, textStyle]}>{props.text}</Text>
    </Pressable>
  );
}
