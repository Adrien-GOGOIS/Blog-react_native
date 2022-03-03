// Imports react native
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Imports react
import { useContext } from "react";

// Context
import { UserContext } from "../App";

export default function Login({ navigation }) {
  // State du context
  const userState = useContext(UserContext);

  // Fonction click login
  const handleSubmit = () => {
    if (userState.userName.length <= 10 && userState.userName.length > 0) {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Choisissez un pseudo"
        onChangeText={userState.setUserName}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderColor: "black",
    width: 200,
    height: 30,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 2,
  },

  button: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    height: 20,
    width: 200,
    backgroundColor: "rgba(100, 150, 255, 0.7)",
    borderRadius: 5,
    margin: 20,
  },

  textButton: {
    textAlign: "center",
  },
});
