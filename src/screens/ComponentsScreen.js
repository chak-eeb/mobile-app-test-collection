import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Chakib";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React native!</Text>
      <Text style={styles.secondTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "red",
  },
  secondTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
