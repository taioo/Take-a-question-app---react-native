import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const questionList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.questions}
      renderItem={(info) => (
        <ListItem
          questionName={info.item.name}
          questionAge={info.item.age}
          questionImage={info.item.image}
          questionKey={info.item.key}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default questionList;
