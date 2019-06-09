import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from "react-native";

class ButtonWithBackground extends Component {


    
  time;






  constructor(props) {
    super(props);
    time=Date.now();
  }


  componentDidMount() {
    console.log(Date.now() - time);
  }




  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.button, { backgroundColor: this.props.color }]}>
          <Text>
            {this.props.children}
          </Text>
        </View>

      </TouchableOpacity>

    );

  }

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 12,
    padding: 8,
    overflow: 'hidden',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default ButtonWithBackground;
