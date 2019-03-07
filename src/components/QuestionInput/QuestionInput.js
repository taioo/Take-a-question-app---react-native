import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const questionInput = props => (
  <DefaultInput
    questionholder="Question Name"
    value={props.questionData.value}
    valid={props.questionData.valid}
    touched={props.questionData.touched}
    onChangeText={props.onChangeText}
  />
);

export default questionInput;
