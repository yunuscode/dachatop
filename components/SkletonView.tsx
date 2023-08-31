
import { StyleProp, ViewStyle, useColorScheme } from "react-native";
import { View } from "./Themed";

type SkletonViewProps = {
  style: StyleProp<ViewStyle>;
  height?: string | number;
  width?: string | number;
};

export default function SkletonView(props: SkletonViewProps) {
  const { style, height, width } = props;
  const colorMode = useColorScheme();

  return (
    <View></View>
  );
}
