import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItemView";

class QuestionListView extends Component {


  state = {
    start:0,
    end:0,
    count:0
};

  constructor(props) {
    super(props);
    this.state.start=Date.now();
  }


  componentDidMount() {
    this.state.end=Date.now();
    console.log('%c######## RENDER time FlatList: ','background: red',(this.state.end-this.state.start));
    this.state.count++;
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
