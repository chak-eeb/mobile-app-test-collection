import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text style={styles.text}>Hello there!</Text>
      <Button
        onPress={() => navigate("Component")}
        title="Go to Components screen"
      />
      <Button onPress={() => navigate("List")} title="Go to List screen" />
      <Button onPress={() => navigate("Image")} title="Go to Image screen" />
      <Button
        onPress={() => navigate("Counter")}
        title="Go to Counter screen"
      />
      <Button onPress={() => navigate("Color")} title="Go to Color screen" />
      <Button onPress={() => navigate("Square")} title="Go to Square screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
