import React, { Component } from "react";
import {
  View
} from "react-native";
import { connect } from "react-redux";
import QuestionListView from "../../components/QuestionList/QuestionListView";

class FindQuestionViewScreen extends Component {
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

  render() {  
    return (
      <View>
        <QuestionListView questions={this.props.questions}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions
  };
};

export default connect(mapStateToProps)(FindQuestionViewScreen);
