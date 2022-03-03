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

  // Fonction récupération du texte de l'utilisateur dans l'input
  //   const handleChange = (e) => {
  //     setTextInput([e.target.value]);
  //   };

  // Fonction de push du post dans le context de l'app pour réutilisation dans Timeline
  const handleSubmit = () => {
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
  };

  return (
    <SafeAreaView>
      <Text>AddPost</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ecrivez ce qui vous passe par la tête"
          onChangeText={setTextInput}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
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
  },

  button: {
    borderColor: "black",
  },
});
