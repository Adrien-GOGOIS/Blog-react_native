import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    height: 30,
    width: "100%",
    bottom: 1,
  },

  button: {
    borderColor: "black",
    marginLeft: 2,
    marginRight: 2,
  },
});
