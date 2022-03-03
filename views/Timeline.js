import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// Imports react
import { useContext, useEffect, useState } from "react";

// Context
import { UserContext } from "../App";
import { FlatList } from "react-native-web";

// Components
import PostCard from "../components/PostCard";

export default function Timeline() {
  // State du context
  const userState = useContext(UserContext);
  console.log("TEST", userState.userPost);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={userState.userPost.reverse()}
        renderItem={(data) => <PostCard text={data.item} />}
        keyExtractor={(data, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomWidth: 1 }}></View>
        )}
      />
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
