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
export const LogContext = createContext();

export default function App() {
  // State
  const [isLoggedIn, setLoggedIn] = useState(false);
  const value = {
    isLoggedIn: isLoggedIn,
    setLoggedIn: setLoggedIn,
  };

  return (
    <LogContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </LogContext.Provider>
  );
}
