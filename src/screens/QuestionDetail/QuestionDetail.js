import React, { Component } from "react";
import {
  View,
  Image,
  Text,

  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { deleteQuestion } from "../../store/actions/index";

class QuestionDetail extends Component {
  state = {
    viewMode: "portrait"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  questionDeletedHandler = () => {
    this.props.onDeleteQuestion(this.props.selectedQuestion.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          this.state.viewMode === "portrait"
            ? styles.portraitContainer
            : styles.landscapeContainer
        ]}
      >
        <View style={styles.subContainer}>
          <Image
            source={this.props.selectedQuestion.image}
            style={styles.questionImage}
          />
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.questionName}>
              {this.props.selectedQuestion.name}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.questionDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon
                  size={30}
                  name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                  color="red"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  questionImage: {
    width: "100%",
    height: 200
  },
  questionName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteQuestion: key => dispatch(deleteQuestion(key))
  };
};

export default connect(null, mapDispatchToProps)(QuestionDetail);
