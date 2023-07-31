import { StatusBar } from 'expo-status-bar';
import { Image, Platform, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

import { Text, View } from '@/components/Themed';
import { useTranslation } from 'react-i18next';

export default function ModalScreen() {

  const { i18n } = useTranslation();
  const navigation = useNavigation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Pressable style={styles.language_button} onPress={() => changeLanguage("uz")}>
        <Image source={require("@/assets/icons/uzbek-lang.png")} width={32} height={32} style={styles.language_image} />
        <Text style={styles.language_text}>O'zbek tili</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable style={styles.language_button} onPress={() => changeLanguage("en")}>
        <Image source={require("@/assets/icons/english-lang.png")} width={32} height={32} style={styles.language_image} />
        <Text style={styles.language_text}>English</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable style={styles.language_button} onPress={() => changeLanguage("ru")}>
        <Image source={require("@/assets/icons/russian-lang.png")} width={32} height={32} style={styles.language_image} />
        <Text style={styles.language_text}>Русский язык</Text>
      </Pressable>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '100%',
  },
  language_image: {
    width: 25,
    height: 25
  },
  language_button: {
    width: "100%",
    padding: 10,
    paddingVertical: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  language_text: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: "600"
  }
});
