import { ScrollView, Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, useColorScheme } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function DetailsScreen() {
  const width = Dimensions.get("window").width;
  const route = useRoute();
  const { images, title } = route.params as any;
  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0); 
  const colorScheme = useColorScheme();

  return (
    <ScrollView>
      <Carousel
        width={width}
        height={width}
        data={images}
        onProgressChange={(_: number, absoluteProgress: number) => {
            const abnumber = Math.round(absoluteProgress);
            if(abnumber !== currentActiveIndex) {
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
            {
                images.map((_: never, index: number) => {
                    return <View key={index} style={index === currentActiveIndex ? styles.dotActiveItem : styles.dotItem}></View>
                })
            }
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <View style={styles.locationView}>
        <AntDesign
            name="find"
            size={18}
            color={Colors[colorScheme ?? 'light'].grayText}
          />
            <Text color="grayText" style={styles.locationText}>
                Yusufxona atrofida joylashgan
            </Text>
        </View>
        <View style={styles.featuresView}>
            <Text style={styles.featuresTitle}>
                Imkoniyatlar
            </Text>
      </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carouselView: {
    marginBottom: 24,
  },
  carousel: {},
  counter: {
    transform: [{ translateY: -50}],
    backgroundColor: "transparent",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5
  },
  dotItem: {
    width: 10,
    height: 10,
    backgroundColor: "#ffffff22",
    borderRadius: 50
  },
  dotActiveItem: {
    width: 12,
    height: 12,
    backgroundColor: "#ffffff",
    borderRadius: 50
  },
  container: {
    paddingHorizontal: 24
  },
  title: {
    fontSize: 24,
    fontWeight: "700"
  },
  locationView: {
    flexDirection: "row",
    marginTop: 10,
    gap: 5,
    alignItems: "center"
  },
  locationText: {
    fontSize: 16
  },
  featuresView: {
    marginTop: 20
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "700"
  }
});

export default DetailsScreen;
