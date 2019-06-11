import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItemView";

class QuestionListView extends Component {


time;

  constructor(props) {
    super(props);

    // for (i = 0; i < 1000; i++) { 
    //   this.props.questions.push({ key:i, name:'test', age:99, text:'test',image: null });
    // }

    time = Date.now();
  }


  componentDidMount() {
    //console.log(Date.now() - time);
  }

  render() {
    return (
      <FlatList
        data={this.props.questions}
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
  }

}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default QuestionListView;
