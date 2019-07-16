import React, { Component } from "react";
import { Platform, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/Ionicons";

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
        // time = Date.now();
        this.setState({
          pickedImaged: { uri: res.uri },
        });
        this.props.onImagePicked({ uri: res.uri, base64: res.data });

        // console.log(Date.now() - time);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionholder}>
          <Image source={this.state.pickedImaged} style={styles.previewImage} />
        </View>

        <TouchableOpacity onPress={this.pickImageHandler} style={styles.button}>





          <Text style={{ color: 'orange' }}>

            <Icon
              size={30}
              name={Platform.OS === "android" ? "md-camera" : "ios-camera"}
              color="orange"
            /> Add Image</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
// todo android fix
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        width: "100%",
        height: "100%",
        alignItems: "center"
      },
      android: {},
    }),
  },
  questionholder: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: "80%"
      },
      android: {},
    }),
  },
  button: {
    borderWidth: 3,
    borderColor: "orange",
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  previewImage: {

    ...Platform.select({
      ios: {
        width: "100%",
        height: "100%"
      },
      android: {},
    }),


  }
});

export default PickImage;
