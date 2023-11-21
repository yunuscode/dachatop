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

const FlatItem = ({ item }: any) => {
  const theme = useColorScheme();
  const borderColor = theme == "dark" ? "#ffffff44" : "#00000044";

  return (
    <View style={[styles.item, { borderColor: borderColor }]}>
      <View style={styles.informations}>
        <Image
          source={{ uri: SERVER_URL + "files/" + item.room.images[0].path }}
          style={{
            width: "40%",
            height: 80,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.itemTitle}>{item.room.name}</Text>
          <Text>Status: To'lanmagan</Text>
          <Text>Kirish vaqti: {moment(item.startDate).format("L")}</Text>
          <Text>Chiqish vaqti: {moment(item.endDate).format("L")}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderTopColor: borderColor,
        }}
      >
        <Pressable
          style={{
            flexGrow: 1,
            padding: 10,
            borderRightWidth: 1,
            borderRightColor: borderColor,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
            Telefon qilish
          </Text>
        </Pressable>
        <Pressable style={{ flexGrow: 1, padding: 5, paddingTop: 10 }}>
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
            Lokatsiyani ochish
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function SavedScreen() {
  const [data, setData] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { getBookings } = useBooking();
  useEffect(() => {
    handleFetch();
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
      {data?.length && (
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
    paddingTop: 5,
    overflow: "hidden",
  },
  informations: {
    flexDirection: "row",
    paddingBottom: 10,
  },
});
