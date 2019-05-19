import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/background.jpg";

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

class StartScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingText>Please Log In</HeadingText>
          <ButtonWithBackground color="#29aaf4" onPress={(this.loginHandler)}>
            Start
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default StartScreen;
