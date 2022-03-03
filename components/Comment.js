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
          <Text style={styles.textButton}>Commenter</Text>
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
    padding: 10,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    height: 20,
    textAlign: "center",
    borderRadius: 5,
    margin: 5,
    padding: 10,
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

  textButton: {
    textAlign: "center",
  },

  title: {
    fontSize: 40,
    margin: 20,
    fontWeight: "bold",
  },
});
