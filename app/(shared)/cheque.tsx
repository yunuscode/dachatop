import { Text, View } from "@/components/Themed";
import { Image, Pressable, StyleSheet } from "react-native";

export default function ChequeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Muvaffaqiyatli band qilindi!</Text>
        <View style={styles.cheque}>
            <View style={styles.chequeRow}>
                <Text style={styles.chequeTitle}>Buyurtma raqami:</Text>
                <Text style={styles.chequeInfo}>#4444</Text>
            </View>
        </View>
        <View style={styles.cheque}>
            <View style={styles.chequeRow}>
                <Text style={styles.chequeTitle}>Kirish vaqti:</Text>
                <Text style={styles.chequeInfo}>12 avgust soat 17:00</Text>
            </View>
        </View>
        <View style={styles.cheque}>
            <View style={styles.chequeRow}>
                <Text style={styles.chequeTitle}>Chiqish vaqti:</Text>
                <Text style={styles.chequeInfo}>14 avgust soat 16:00</Text>
            </View>
        </View>
        <View style={styles.cheque}>
            <View style={styles.chequeRow}>
                <Text style={styles.chequeTitle}>Oldindan to'lov:</Text>
                <Text style={styles.chequeInfo}>2 mln so'm</Text>
            </View>
        </View>
        <View style={styles.cheque}>
            <View style={styles.chequeRow}>
                <Text style={styles.chequeTitle}>Kirishdagi to'lov:</Text>
                <Text style={styles.chequeInfo}>10 mln so'm</Text>
            </View>
        </View>
        <View style={styles.cheque}>
            <View style={styles.chequeRow}>
                <Text style={styles.chequeTitle}>To'lov statusi:</Text>
                <Text style={styles.chequeInfo}>Kutilyabdi</Text>
            </View>
        </View>
      <View style={styles.warning}>
        <Text style={styles.warningTitle}>Eslatma:</Text>
        <Text>
          Siz muvaffaqiyatli band qildingiz va to'lov qismiga yetib keldingiz!
          To'lovni 10 daqiqa ichida to'lamasangiz band qilishingiz bekor
          qilinadi. Pastdagi to'lov qilish tugmasini bosib keling va qaytib kelganingizda sahifa avtomatik tarzda yangilandi.
        </Text>
      </View>
      <View style={styles.bottomView}>
            <Pressable style={styles.paymeButton}>
                <Text style={styles.paymeText}>Payme orqali to'lash</Text>
            </Pressable>
            <Pressable style={styles.uzumButton}>
                <Text style={styles.uzumText}>Uzumbank orqali to'lash</Text>
            </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 20
  },
  cheque: {
    marginTop: 4
  },
  chequeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chequeTitle: {
    fontWeight: "500"
  },
  chequeInfo: {
    fontSize: 16, 
    fontWeight: "500"
  },
  warning: {
    backgroundColor: "#FFBA5544",
    padding: 10,
    borderRadius: 8,
    marginTop: 20
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  paymeButton: {
    backgroundColor: "#33CCCC",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  paymeText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center"
  },
  uzumButton: {
    backgroundColor: "#740cfe",
    padding: 14,
    borderRadius: 8
  },
  uzumText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center"
  },
  bottomView: {
    marginTop: "auto",
    marginBottom: 60
  }
});
