import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import useBooking from "@/api/useBooking";
import { SERVER_URL } from "@/constants/config";
import moment from "moment";
import "moment/locale/ru";
import "moment/locale/uz-latn";
import "moment/locale/en-gb";
import { useTranslation } from "react-i18next";
import { useNavigation } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const FlatItem = ({ item }: any) => {
  const theme = useColorScheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const borderColor = theme == "dark" ? "#ffffff33" : "#00000011";
  const iconColor = theme == "dark" ? "#ffffff" : "#000000";
  const user = useSelector((state: any) => state.user);
  const lang = user.lang;

  if (lang == "uz") {
    moment.locale("uz-latn");
  } else if (lang == "ru") {
    moment.locale("ru");
  } else {
    moment.locale("en");
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(
          ...([
            "bookinfo",
            {
              item: item.room,
              booking: item,
              payment: item.payments,
            },
          ] as never)
        );
      }}
      style={[styles.item, { borderColor: borderColor }]}
    >
      <Image
        source={{ uri: SERVER_URL + "files/" + item.room.images[0].path }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 5,
          marginRight: 10,
        }}
      />
      <View style={{ marginRight: "auto" }}>
        <Text style={styles.itemTitle}>{item.room.name}</Text>
        <Text>{moment(item.createdAt).fromNow()}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={30}
        color={iconColor}
      />
    </Pressable>
  );
};

export default function SavedScreen() {
  const [data, setData] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { getBookings } = useBooking();
  const navigation = useNavigation();
  useEffect(() => {
    handleFetch();
    navigation.addListener("focus", () => {
      handleFetch();
    });
  }, []);

  const handleFetch = () => {
    getBookings()
      .then((data) => {
        setLoading(true);
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {!!data?.length && (
        <FlatList
          onRefresh={() => {
            handleFetch();
          }}
          refreshing={loading}
          style={styles.flatlist}
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <FlatItem item={item} />}
        />
      )}
      {loading && (
        <View>
          <ActivityIndicator />
        </View>
      )}
      {!data?.length && !loading && (
        <View>
          <Text>Faol buyurtmalar yo'q</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  flatlist: {
    width: "100%",
    padding: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: "#00000044",
    marginBottom: 14,
    borderRadius: 5,
    overflow: "hidden",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  informations: {
    flexDirection: "row",
    paddingBottom: 10,
  },
});
