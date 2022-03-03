import { View, Text, StyleSheet, FlatList } from "react-native";

// Imports react
import { useContext, useState, createContext } from "react";

// Context
import { UserContext } from "../App";
import { TouchableOpacity } from "react-native";
import Comment from "./Comment";

// context de PostCard
export const CommentContext = createContext();

export default function PostCard(props) {
  // State du context
  const userState = useContext(UserContext);

  // State de PostCard
  const [userComment, setUserComment] = useState([]);

  const value = {
    userComment: userComment,
    setUserComment: setUserComment,
  };

  console.log("TEST COMMENT", userComment);

  return (
    <CommentContext.Provider value={value}>
      <View style={styles.container}>
        <Text style={styles.username}>{userState.userName}</Text>
        <Text style={styles.text}>{props.text}</Text>
        {/* {userComment !== undefined && ( */}
        <FlatList
          data={userComment}
          renderItem={(data) => (
            <View style={styles.commentContainer}>
              <Text style={styles.comment}>
                <Text style={styles.user}>{userState.userName}</Text> :{" "}
                {data.item}
              </Text>
            </View>
          )}
          keyExtractor={(data, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ borderBottomWidth: 1 }}></View>
          )}
        />
        {/* )} */}
        <Comment />
      </View>
    </CommentContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: 5,
    width: 300,
  },

  username: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },

  user: {
    color: "grey",
    fontStyle: "italic",
  },

  text: {
    fontSize: 20,
    margin: 5,
  },

  comment: {
    color: "blue",
    textAlign: "right",
    marginRight: 10,
    marginBottom: 10,
  },

  commentContainer: {
    position: "relative",
  },
});
