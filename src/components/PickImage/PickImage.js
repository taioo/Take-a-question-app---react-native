import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
  state = {
    pickedImaged: null,
  }

  componentDidMount() {
    
  }




  pickImageHandler = () => {
    
    ImagePicker.showImagePicker({ title: "Pick an Image" }, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        start = Date.now();
        this.setState({
          pickedImaged: { uri: res.uri },
        });
        this.props.onImagePicked({ uri: res.uri, base64: res.data });
        end = Date.now();
        console.log('%c######## LOAD time PickImg: ','background: red',(end-start));
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionholder}>
          <Image source={this.state.pickedImaged} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Choose Image" onPress={this.pickImageHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  questionholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: "80%"
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

export default PickImage;
