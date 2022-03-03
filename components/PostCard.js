import { View, Text, StyleSheet } from "react-native";

// Imports react
import { useContext, useState } from "react";

// Context
import { UserContext } from "../App";
import { TouchableOpacity } from "react-native";
import Comment from "./Comment";

export default function PostCard(props) {
  // State du context
  const userState = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{userState.userName}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: 5,
    width: 300,
  },

  username: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
    margin: 5,
  },
});
