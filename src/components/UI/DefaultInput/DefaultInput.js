import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

class DefaultInput extends Component {


  state = {
    
    start:'0',
    end:'0'
};





  constructor(props) {
    super(props);
    this.state.start=Date.now();
  }


  componentDidMount() {
    this.state.end=Date.now();
    console.log('%c######## RENDER time DefaultInput: ','background: red',(this.state.end-this.state.start));
  }




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
