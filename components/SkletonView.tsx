import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { StyleProp, ViewStyle, useColorScheme } from "react-native";

type SkletonViewProps = {
  style: StyleProp<ViewStyle>;
  height?: string | number;
  width?: string | number;
};

export default function SkletonView(props: SkletonViewProps) {
  const { style, height, width } = props;
  const colorMode = useColorScheme();

  return (
    <MotiView style={style}>
      <Skeleton
        width={width}
        height={height}
        colorMode={colorMode === "light" ? "light" : "dark"}
      />
    </MotiView>
  );
}
