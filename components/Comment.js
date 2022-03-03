import { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { CommentContext } from "./PostCard";

export default function Comment() {
  const comment = useContext(CommentContext);

  const [userInput, setUserInput] = useState();

  // Fonction ajout de commentaire
  const handlePress = () => {
    comment.setUserComment([userInput]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter un commentaire"
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
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
    width: 200,
    height: 20,
    textAlign: "center",
    backgroundColor: "rgba(200, 200, 200, 0.6)",
    borderRadius: 15,
    marginTop: 5,
  },

  button: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    height: 20,
    width: 100,
    backgroundColor: "rgba(100, 150, 255, 0.7)",
    borderRadius: 5,
    margin: 5,
  },

  title: {
    fontSize: 40,
    margin: 20,
    fontWeight: "bold",
  },
});
