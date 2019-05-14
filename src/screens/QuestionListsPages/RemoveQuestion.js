import React, { Component } from "react";
import {
  View
} from "react-native";
import { connect } from "react-redux";
import QuestionList from "../../components/QuestionList/QuestionList";

class FindQuestionScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  itemSelectedHandler = key => {
    const selQuestion = this.props.questions.find(question => {
      return question.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-questions.QuestionDetailScreen",
      title: selQuestion.name,
      passProps: {
        selectedQuestion: selQuestion
      }
    });
  };

  render() {  
    return (
      <View>
        <QuestionList
            questions={this.props.questions}
            onItemSelected={this.itemSelectedHandler}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions
  };
};

export default connect(mapStateToProps)(FindQuestionScreen);
