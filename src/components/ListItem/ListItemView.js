import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <View style={styles.listItem}>
    <Image resizeMode="cover" source={props.questionImage} style={styles.questionImage} />

    <Text style={{
    backgroundColor: '#FF003F',
    borderWidth: 1,
    borderColor: '#FF003F',
    borderRadius: 12,
    padding: 8,
    overflow: 'hidden',
  }}>{props.questionName}</Text>
  
    <Text style={{
    backgroundColor: '#BF00FF',
    borderWidth: 1,
    borderColor: '#BF00FF',
    borderRadius: 12,
    padding: 8,
    overflow: 'hidden',
  }}>{props.questionAge}</Text>

    <Text style={{
    backgroundColor: '#CCFF00',
    borderWidth: 1,
    borderColor: '#CCFF00',
    borderRadius: 12,
    padding: 8,
    overflow: 'hidden',
  }}>{props.questionText}</Text>
  
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    alignItems: "center"

  },
  questionImage: {
    height: 300,
    width: 300,
    alignItems: "center"
  },
});

export default listItem;
