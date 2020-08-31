import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../Components/ColorCounter";
const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color is either red, green or blue
    // change is either +10 or -10
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
    }
  };
  // switch(color){
  //     case("red"):
  // (red + change >255 || red + change < 0) ? null : setRed(red + change);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => {
          setColor("red", -1 * COLOR_INCREMENT);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => [setGreen(green + COLOR_INCREMENT)]}
        onDecrease={() => {
          setGreen(green - COLOR_INCREMENT);
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => [setBlue(blue + COLOR_INCREMENT)]}
        onDecrease={() => {
          setBlue(blue - COLOR_INCREMENT);
        }}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
