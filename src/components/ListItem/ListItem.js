import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={props.questionImage} style={styles.questionImage} />
      <Text>{props.questionName}</Text>
      <Text>{props.questionAge}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  questionImage: {
width: 30, height: 30, borderRadius: 30/ 2
  }
});

export default listItem;
