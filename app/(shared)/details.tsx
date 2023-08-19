import Badge from "@/components/Badge";
import { ScrollView, Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

function DetailsScreen() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const route = useRoute();
  const navigation = useNavigation();
  const { images, title } = route.params as any;
  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);
  const colorScheme = useColorScheme();

  return (
    <>
      <ScrollView>
        <Carousel
          width={width}
          height={width}
          data={images}
          onProgressChange={(_: number, absoluteProgress: number) => {
            const abnumber = Math.round(absoluteProgress);
            if (abnumber !== currentActiveIndex) {
              setCurrentActiveIndex(abnumber);
            }
          }}
          style={styles.carousel}
          scrollAnimationDuration={1000}
          renderItem={({ index }) => (
            <Image
              source={{ uri: images[index].uri }}
              style={[
                styles.carousel,
                {
                  height: width,
                },
              ]}
            />
          )}
        />
        <View style={styles.counter}>
          {images.map((_: never, index: number) => {
            return (
              <View
                key={index}
                style={
                  index === currentActiveIndex
                    ? styles.dotActiveItem
                    : styles.dotItem
                }
              ></View>
            );
          })}
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.locationView}>
            <AntDesign
              name="find"
              size={18}
              color={Colors[colorScheme ?? "light"].grayText}
            />
            <Text color="grayText" style={styles.locationText}>
              Yusufxona atrofida joylashgan
            </Text>
          </View>
          <View style={styles.featuresView}>
            <View style={styles.features}>
              <DetailsBadge title="Xonalar soni" info="6 ta" />
              <DetailsBadge title="Qishki basseyn" info="bor" />
              <DetailsBadge
                title="Kimlar uchun"
                info="Oila, faqat erkaklar, faqat ayollar"
              />
              <DetailsBadge title="Playstation 4" info="bor" />
              <DetailsBadge title="Karoake" info="bor" />
              <DetailsBadge title="Alkogol" info="qo'yilmaydi" />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 2,
          backgroundColor: Colors[colorScheme ?? "light"].borderColor,
        }}
      ></View>
      <View style={[{ height: height / 7 }, styles.bottomView]}>
        <View style={styles.prices}>
          <Text style={styles.price}>4 mln - 6 mln</Text>
          <Text>Umumiy narxi</Text>
        </View>
        <Pressable
            onPress={() => {
                navigation.navigate("book" as never)
            }}
          style={{
            backgroundColor: Colors[colorScheme ?? "light"].text,
            width: "40%",
            paddingVertical: 15,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: Colors[colorScheme ?? "light"].background,
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Ijaraga olish
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  carouselView: {
    marginBottom: 24,
  },
  carousel: {},
  counter: {
    transform: [{ translateY: -50 }],
    backgroundColor: "transparent",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  dotItem: {
    width: 10,
    height: 10,
    backgroundColor: "#ffffff22",
    borderRadius: 50,
  },
  dotActiveItem: {
    width: 12,
    height: 12,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  locationView: {
    flexDirection: "row",
    marginTop: 10,
    gap: 5,
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
  },
  featuresView: {
    marginTop: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  prices: {
    flexDirection: "column",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
  },
  bottomView: {
    paddingHorizontal: 24,
    paddingBottom: 50,
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DetailsScreen;

/** Details Infromation Badge Component */

function DetailsBadge({ title, info }: { title: string; info: string }) {
  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        flexDirection: "row",
      }}
    >
      <Text>{title}:</Text>
      <Text style={{ fontWeight: "600" }}> {info}</Text>
    </View>
  );
}
