
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { deleteQuestion } from "../../store/actions/index";

class listItem extends Component {

  constructor(props) {
    super(props);
  }

  questionDeletedHandler = () => {
    this.props.onDeleteQuestion(this.props.questionKey);
  };

  render() {
    return (

        <View style={styles.listItem}>
          <Image resizeMode="cover" source={this.props.questionImage} style={styles.questionImage} />
          <Text>    </Text>
          <Text>{this.props.questionName}</Text>
          <Text>                                                                                </Text>
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
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  questionImage: {
    width: 30, height: 30, borderRadius: 30 / 2
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteQuestion: key => dispatch(deleteQuestion(key))
  };
};

export default connect(null, mapDispatchToProps)(listItem);

