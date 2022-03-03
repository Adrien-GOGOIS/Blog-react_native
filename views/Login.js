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
        <Text>Submit</Text>
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
  },

  button: {
    borderColor: "black",
  },
});
