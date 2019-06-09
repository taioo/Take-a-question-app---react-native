import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";

import { addQuestion } from "../../store/actions/index";
import QuestionInput from "../../components/QuestionInput/QuestionInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import validate from "../../utility/validation";

class CreateQuestionScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  state = {
    controls: {
      questionName: {
        value: "",
        valid: false,

      },
      questionAge: {
        value: "",
        valid: false,

      },
      questionText: {
        value: "",
        valid: false,

      },
      image: {
        value: null,
        valid: false
      }
    }
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

  questionNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          questionName: {
            ...prevState.controls.questionName,
            value: val,
            valid: validate(val, prevState.controls.questionName.validationRules),
          }
        }
      };
    });
  };

  questionAgeChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          questionAge: {
            ...prevState.controls.questionAge,
            value: val,
            valid: validate(val, prevState.controls.questionAge.validationRules),
          }
        }
      };
    });
  };

  questionTextChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          questionText: {
            ...prevState.controls.questionText,
            value: val,
            valid: validate(val, prevState.controls.questionText.validationRules),
          }
        }
      };
    });
  };

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      };
    });
  }

  questionAddedHandler = () => {
    this.props.onAddQuestion(
      this.state.controls.questionName.value,
      this.state.controls.questionAge.value,
      this.state.controls.questionText.value,
      this.state.controls.image.value
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Create a Question</HeadingText>
          </MainText>
          <Text style={{ color: 'black' }}>
            name:
          </Text>

          <QuestionInput
            questionData={this.state.controls.questionName}
            onChangeText={this.questionNameChangedHandler}
          />
          <Text style={{ color: 'black' }}>
            Question:
          </Text>
          <QuestionInput
            questionData={this.state.controls.questionText}
            onChangeText={this.questionTextChangedHandler}
          />
          <Text style={{ color: 'black' }}>
            Age:
          </Text>
          <QuestionInput
            questionData={this.state.controls.questionAge}
            onChangeText={this.questionAgeChangedHandler}
          />

          <PickImage onImagePicked={this.imagePickedHandler} />

          <View style={styles.container}>
            <Button
              title="create question"
              onPress={this.questionAddedHandler}
              disabled={
                !this.state.controls.questionName.valid ||
                !this.state.controls.questionAge.valid ||
                !this.state.controls.questionText.valid ||
                !this.state.controls.image.valid
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: "center",
    margin: 10
  },
  button: {
    margin: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddQuestion: (questionName, questionAge, questionText, image) => dispatch(addQuestion(questionName, questionAge, questionText, image))
  };
};

export default connect(null, mapDispatchToProps)(CreateQuestionScreen);
