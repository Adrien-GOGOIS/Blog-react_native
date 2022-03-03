import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Navbar(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onHome}>
        <Text style={styles.textButton}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onPost}>
        <Text style={styles.textButton}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onProfile}>
        <Text style={styles.textButton}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(151, 10, 10, 1)",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    height: 30,
    width: "100%",
    bottom: 0,
  },

  button: {
    borderColor: "black",
    marginLeft: 2,
    marginRight: 2,
  },

  textButton: {
    color: "white",
  },
});
