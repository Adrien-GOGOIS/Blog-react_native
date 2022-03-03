import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// imports react
import { createContext, useState } from "react";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Components
import Home from "./views/Home";
import Login from "./views/Login";

// context
export const UserContext = createContext();

// FONCTIONS APP
export default function App() {
  // State
  const [userName, setUserName] = useState("");
  const [userPost, setUserPost] = useState([]);

  const value = {
    userName: userName,
    setUserName: setUserName,
    userPost: userPost,
    setUserPost: setUserPost,
  };

  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
