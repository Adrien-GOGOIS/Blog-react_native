import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Imports react
import { useState } from "react";

// Components
import Navbar from "../components/Navbar";

// Views
import Timeline from "./Timeline";
import AddPost from "./AddPost";
import Profile from "./Profile";

export default function Home() {
  // State de navigation
  const [view, setView] = useState("Home");

  // Function de navigation
  const handlePress = (direction) => {
    setView(direction);
  };

  if (view === "Home") {
    return (
      <SafeAreaView style={styles.container}>
        <Timeline />
        <Navbar
          onHome={() => handlePress("Home")}
          onPost={() => handlePress("AddPost")}
          onProfile={() => handlePress("Profile")}
        />
      </SafeAreaView>
    );
  } else if (view === "AddPost") {
    return (
      <SafeAreaView style={styles.container}>
        <AddPost />
        <Navbar
          onHome={() => handlePress("Home")}
          onPost={() => handlePress("AddPost")}
          onProfile={() => handlePress("Profile")}
        />
      </SafeAreaView>
    );
  } else if (view === "Profile") {
    return (
      <SafeAreaView style={styles.container}>
        <Profile />
        <Navbar
          onHome={() => handlePress("Home")}
          onPost={() => handlePress("AddPost")}
          onProfile={() => handlePress("Profile")}
        />
      </SafeAreaView>
    );
  }

  <SafeAreaView style={styles.container}>
    <Navbar
      onHome={() => handlePress("Home")}
      onPost={() => handlePress("AddPost")}
      onProfile={() => handlePress("Profile")}
    />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
