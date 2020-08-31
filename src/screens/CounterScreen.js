import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default CounterScreen;
