import { View, Text, SafeAreaView } from "react-native";

// Imports react
import { useContext, useState } from "react";

// Context
import { UserContext } from "../App";
import { FlatList } from "react-native-web";

// Components
import PostCard from "../components/PostCard";

export default function Timeline() {
  // State du context
  const userState = useContext(UserContext);

  return (
    <SafeAreaView>
      <Text>Timeline</Text>
      <FlatList
        data={userState.userPost}
        renderItem={(data) => <PostCard text={data.item} />}
        keyExtractor={(data, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
