import { setUserToken } from "@/actions/user";
import useUser from "@/api/useUser";
import { Text, TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { RootState } from "@/state/store";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";

export default function EditScreen() {
  const user = useSelector((state: RootState) => state.user);
  const [name, setName] = useState(user.name);
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { deleteUser, getMe, updateName } = useUser();

  const fetchUser = () => {
    getMe().then((data) => {
      if (data) {
        setName(data.user.name);
      }
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSave = () => {
    setLoading(true);
    updateName(name)
      .then((data) => {
        if (data) {
          showMessage({
            message: "Name changed",
            type: "success",
          });
        }
      })
      .catch((e) => {
        showMessage({
          message: "Something went wrong",
          type: "danger",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deletaAccount = () => {
    Alert.alert(
      "Are you sure?",
      "You will not be able to recover this account!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deleteUser().then((data) => {
              dispatch(setUserToken("", ""));
            });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Edit your name"
      />
      <View style={{ justifyContent: "flex-end" }}>
        <Pressable
          onPress={() => {
            deletaAccount();
          }}
        >
          <Text style={{ textAlign: "right" }}>Delete account</Text>
        </Pressable>
      </View>
      <View style={styles.bottomView}>
        <Pressable
          onPress={() => {
            handleSave();
          }}
          style={[
            styles.saveButton,
            {
              backgroundColor: Colors[colorScheme ?? "light"].text,
            },
          ]}
        >
          {loading ? (
            <ActivityIndicator
              color={Colors[colorScheme ?? "light"].background}
            />
          ) : (
            <Text
              style={[
                styles.saveButtonText,
                {
                  color: Colors[colorScheme ?? "light"].background,
                },
              ]}
            >
              Save changes
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    borderRadius: 6,
  },
  bottomView: {
    marginTop: "auto",
    marginBottom: 60,
  },
  saveButton: {
    width: "100%",
    padding: 16,
    textAlign: "center",
    borderRadius: 6,
  },
  saveButtonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
