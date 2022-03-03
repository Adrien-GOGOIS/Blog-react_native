// Imports react
import { useContext } from "react";

// Context
import { UserContext } from "../App";

import { View, Text, SafeAreaView } from "react-native";

export default function Profile() {
  // State du context
  const userState = useContext(UserContext);

  return (
    <SafeAreaView>
      <Text>Profil</Text>
      <Text>Nom d'utilisateur : {userState.userName}</Text>
      <Text>Nombre de Posts : {userState.userPost.length}</Text>
    </SafeAreaView>
  );
}
