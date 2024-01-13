import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import { Text, View } from "@/components/Themed";
import { useState } from "react";
import SkletonView from "@/components/SkletonView";

type CarouselItemProps = {
  width: number;
  images: Array<{ uri: string }>;
  title: string;
  price: string;
  location: string;
  item: any;
};

export function CarouselItem(props: CarouselItemProps) {
  const { width, images, title, price, location, item } = props;
  const navigation = useNavigation();

  const [photoLoading, setPhotoLoading] = useState<boolean>(true);

  return (
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
                item,
              },
            },
          ] as never)
        );
      }}
    >
      <View style={styles.carouselView}>
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
            height={width / 2}
            width={"100%"}
            style={[
              styles.carousel,
              {
                height: width / 2,
              },
            ]}
          />
        )}

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
            {location}
          </Text>
          {/* <AntDesign
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
          </Text> */}
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>
            {title.slice(0, 20)}
            {title.length > 20 && "..."}
          </Text>
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
            {item.baths}
          </Text>
          <Ionicons
            name="ios-bed-outline"
            size={20}
            color="#A1A8B0"
            style={styles.bedIcon}
          />
          <Text lightColor="#A1A8B0" darkColor="#A1A8B0" style={styles.bedText}>
            {item.kingBeds}
          </Text>
        </View>
      </View>
    </Pressable>
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
