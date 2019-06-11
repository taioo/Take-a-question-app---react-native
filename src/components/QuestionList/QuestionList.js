import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

class questionList extends Component {

  constructor(props) {
    super(props);
     for (i = 0; i < 1000; i++) { 
      this.props.questions.push({ key:i, name:'test', age:99, text:'test',image: null });
     }

    time = Date.now();
  }


  componentDidMount() {
    console.log(Date.now() - time);
  }


  render() {

    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.questions}
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



  }


}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default questionList;
