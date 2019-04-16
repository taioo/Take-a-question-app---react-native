import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from "react-native";


class ButtonWithBackground extends Component {


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
    {console.log('render time ButtonWithBackground: '+(this.state.end-this.state.start))}
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
