import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

class DefaultInput extends Component {


  constructor(props) {
    super(props);
    // time = Date.now();
  }

  // componentDidMount() {
  //   console.log(Date.now() - time);
  // }

  render() {
    return (
      <TextInput underlineColorAndroid="transparent"
    {...this.props}
    style={styles.input}
  />
    );

  }

}




const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  }
});

export default DefaultInput;
