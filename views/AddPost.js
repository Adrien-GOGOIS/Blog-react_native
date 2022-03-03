import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Imports react
import { useContext, useState } from "react";

// Context
import { UserContext } from "../App";

export default function AddPost() {
  // State du context
  const userState = useContext(UserContext);

  // State du post dans l'input
  const [textInput, setTextInput] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Fonction de push du post dans le context de l'app pour réutilisation dans Timeline
  const handleSubmit = () => {
    if (textInput.length > 0) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          body: textInput,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => userState.userPost.push([json.body]));

      setToggle((prev) => !prev);
    } else {
      setToggle(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AddPost</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ecrivez ce qui vous passe par la tête"
          onChangeText={setTextInput}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.textButton}>Soumettre</Text>
        </TouchableOpacity>
        {toggle ? (
          <Text style={styles.valid}>Post publié !</Text>
        ) : (
          <Text style={styles.invalid}>Entrez au moins 1 mot pour publier</Text>
        )}
      </View>
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
    width: 300,
    height: 100,
    textAlign: "center",
    backgroundColor: "rgba(200, 200, 200, 0.6)",
    borderRadius: 15,
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

  title: {
    fontSize: 40,
    margin: 20,
    fontWeight: "bold",
  },

  valid: {
    color: "green",
  },

  invalid: {
    color: "red",
  },
});
