import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputField = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default InputField;
