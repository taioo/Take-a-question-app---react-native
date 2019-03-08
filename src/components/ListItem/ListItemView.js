import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={props.questionImage} style={styles.questionImage} />
      <Text>{props.questionName}</Text>
      <Text>{props.questionAge}</Text>
      <Text>{props.questionText}</Text>
    </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: "#eee",
    alignItems: "center"

  },
  questionImage: {
      height: 150,
      width: 150,
      alignItems: "center"
  }
});

export default listItem;
