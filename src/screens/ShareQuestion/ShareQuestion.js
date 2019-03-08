import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";

import { addQuestion } from "../../store/actions/index";
import QuestionInput from "../../components/QuestionInput/QuestionInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import validate from "../../utility/validation";

class ShareQuestionScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  state = {
    controls: {
      questionName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      questionAge: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      questionText: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
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
            touched: true
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
            touched: true
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
            touched: true
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
            <HeadingText>create question</HeadingText>
          </MainText>
          <PickImage onImagePicked={this.imagePickedHandler} />

          <QuestionInput
            questionData={this.state.controls.questionName}
            onChangeText={this.questionNameChangedHandler}
          />
          <QuestionInput
            questionData={this.state.controls.questionAge}
            onChangeText={this.questionAgeChangedHandler}
          />
          <QuestionInput
            questionData={this.state.controls.questionText}
            onChangeText={this.questionTextChangedHandler}
          />
          <View style={styles.button}>
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
    flex: 1,
    alignItems: "center"
  },
  questionholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddQuestion: (questionName, questionAge, questionText, image) => dispatch(addQuestion(questionName, questionAge, questionText, image))
  };
};

export default connect(null, mapDispatchToProps)(ShareQuestionScreen);
