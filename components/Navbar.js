import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Navbar(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onPost}>
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(50, 50, 255, 0.7)",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    height: 80,
    width: "100%",
    bottom: 1,
  },

  button: {
    borderColor: "black",
    marginLeft: 2,
    marginRight: 2,
  },
});
