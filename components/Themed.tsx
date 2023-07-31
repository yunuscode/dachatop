/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInput as DefaultTextInput,
  KeyboardAvoidingView
} from "react-native";

import Colors from "@/constants/Colors";

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

type ViewKeyboardProps = {
  type?: 'view' | 'keyboardview'
}

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"] & ViewKeyboardProps & KeyboardAvoidingView["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    color: colorProps,
    ...otherProps
  } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorProps || "text"
  );

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const {
    style,
    lightColor,
    darkColor,
    color: colorProps,
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorProps || "background"
  );

  const Component = props.type === "view" ? DefaultView : KeyboardAvoidingView

  return <Component style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const {
    style,
    lightColor,
    darkColor,
    color: colorProps,
    ...otherProps
  } = props;

  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "backgroundInput");



  return <DefaultTextInput style={[{ color, borderColor, backgroundColor }, style]} placeholderTextColor={color} {...otherProps} />
}
