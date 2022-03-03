import { View, Text } from "react-native";

// Imports react
import { useContext, useState } from "react";

// Context
import { UserContext } from "../App";

export default function PostCard(props) {
  // State du context
  const userState = useContext(UserContext);

  return (
    <View>
      <Text>{userState.userName}</Text>
      <Text>{props.text}</Text>
    </View>
  );
}
