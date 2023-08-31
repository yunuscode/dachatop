import {
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import { Text, View } from "@/components/Themed";
import { useState } from "react";
import SkletonView from "@/components/SkletonView";

type CarouselItemProps = {
  itemIndex: number;
  width: number;
  images: Array<{ uri: string }>;
  title: string;
  price: string;
};

export function CarouselItem(props: CarouselItemProps) {
  const { itemIndex, width, images, title, price } = props;
  const navigation = useNavigation();

  const [photoLoading, setPhotoLoading] = useState<boolean>(true);
  const colorMode = useColorScheme();

  return (
    <View key={itemIndex} style={styles.carouselView}>
      <Image
        source={{ uri: images[0].uri }}
        onLoadEnd={() => {
            setPhotoLoading(false);
        }}
        style={[
          styles.carousel,
          {
            height: width / 2,
          },
        ]}
      />
      {photoLoading && (
        <SkletonView
          height={width /2}
          width={"100%"}
          style={[
            styles.carousel,
            {
              height: width / 2,
            },
          ]}
        />
      )}

      <Pressable
        onPress={() => {
          navigation?.navigate(
            ...([
              "(shared)",
              {
                screen: "details",
                params: {
                  images,
                  title,
                },
              },
            ] as never)
          );
        }}
      >
        <View style={styles.informationsBoard}>
          <Text
            lightColor="#0064E5"
            darkColor="#0064E5"
            style={styles.priceText}
          >
            {price}
          </Text>
          <Text lightColor="#A1A8B0" darkColor="#A1A8B0" style={styles.dot}>
            •
          </Text>
          <Text lightColor="#A1A8B0" darkColor="#A1A8B0">
            Dacha
          </Text>
          <AntDesign
            name="star"
            size={16}
            color="#FFBA55"
            style={styles.starIcon}
          />
          <Text
            lightColor="#FFBA55"
            darkColor="#FFBA55"
            style={styles.rateText}
          >
            4.0
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesome
            name="bath"
            size={18}
            color="#A1A8B0"
            style={styles.showerIcon}
          />
          <Text
            lightColor="#A1A8B0"
            style={styles.showerText}
            darkColor="#A1A8B0"
          >
            2
          </Text>
          <Ionicons
            name="ios-bed-outline"
            size={20}
            color="#A1A8B0"
            style={styles.bedIcon}
          />
          <Text lightColor="#A1A8B0" darkColor="#A1A8B0" style={styles.bedText}>
            4
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselView: {
    marginBottom: 24,
  },
  carousel: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  informationsBoard: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
  },
  dot: {
    marginHorizontal: 8,
    fontWeight: "700",
  },
  carouselImage: {
    width: "100%",
  },
  rateText: {
    fontWeight: "700",
    fontSize: 16,
  },
  starIcon: {
    marginLeft: "auto",
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  details: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  showerText: {
    marginLeft: 3,
    fontWeight: "500",
  },
  showerIcon: {
    marginLeft: "auto",
  },
  bedText: {
    marginLeft: 3,
    fontWeight: "500",
  },
  bedIcon: {
    marginLeft: 10,
  },
});
