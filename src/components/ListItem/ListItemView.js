import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class listItem extends Component {

  constructor(props) {
    super(props);
    //time = Date.now();
  }


  componentDidMount() {
    //console.log(Date.now() - time);
  }
  
  render() {
    return(
    <View>
      <View style={styles.listItem}>

        {this.props.questionImage != null ? <Image resizeMode="cover" source={this.props.questionImage} style={styles.questionImage} /> : <View />}

        <Text style={{
          backgroundColor: '#FF003F',
          borderWidth: 1,
          borderColor: '#FF003F',
          borderRadius: 12,
          padding: 8,
          overflow: 'hidden',
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 28
        }}>{this.props.questionName}</Text>

        <Text style={{
          backgroundColor: '#BF00FF',
          borderWidth: 1,
          borderColor: '#BF00FF',
          borderRadius: 12,
          padding: 8,
          overflow: 'hidden',
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 28
        }}>{this.props.questionAge}</Text>

        <Text style={{
          backgroundColor: '#CCFF00',
          borderWidth: 1,
          borderColor: '#CCFF00',
          borderRadius: 12,
          padding: 8,
          overflow: 'hidden',
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 28
        }}>{this.props.questionText}</Text>

      </View>

    </View>);
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    alignItems: "center"

  },
  questionImage: {
    height: 300,
    width: 500,
    alignItems: "center"
  },
});

export default listItem;
