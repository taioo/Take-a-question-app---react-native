import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItemView";
import backgroundImage from "../../assets/background.jpg";

class QuestionListView extends Component {


  state = {
    start: 0,
    end: 0,

  };

  constructor(props) {
    super(props);
    this.state.start = Date.now();


    // for (i = 0; i < 20; i++) { 
    //   this.props.questions.push({ key:i, name:'test', age:99, text:'test',image: null });
    // }


    

    console.log('%c######## Props: ', 'background: red', (this.props));
  }


  componentDidMount() {
    this.state.end = Date.now();
    console.log('%c######## RENDER time FlatList: ', 'background: red', (this.state.end - this.state.start));

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
