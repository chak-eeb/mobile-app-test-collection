import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color} `}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        onPress={() => {
          onDecrease();
        }}
        title={`Decrease ${color} `}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
