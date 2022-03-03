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
      <Text>Nom d'utilisateur : {userState.userName}</Text>
      <Text>Nombre de Posts : {userState.userPost.length}</Text>
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

  title: {
    fontSize: 40,
    margin: 30,
    fontWeight: "bold",
  },
});
