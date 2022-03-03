// Imports react
import { useContext } from "react";

// Context
import { UserContext } from "../App";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Profile() {
  // State du context
  const userState = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.username}>
        Nom d'utilisateur : {userState.userName}
      </Text>
      <Text style={styles.posts}>
        Nombre de Posts : {userState.userPost.length}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    margin: 30,
    fontWeight: "bold",
  },

  username: {
    fontSize: 20,
    margin: 5,
    backgroundColor: "rgba(151, 10, 10, 1)",
    color: "white",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },

  posts: {
    fontSize: 20,
    margin: 5,
    color: "rgba(151, 10, 10, 1)",
  },
});
