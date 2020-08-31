import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColor([...colors, rgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
