import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItemView";

const questionList = props => {
  return (
    <FlatList
      data={props.questions}
      renderItem={(info) => (
        <ListItem
          questionName={info.item.name}
          questionAge={info.item.age}
          questionText={info.item.text}
          questionImage={info.item.image}
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
