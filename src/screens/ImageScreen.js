import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/images/forest.jpg")}
        imgScore={9}
      />
      <ImageDetail
        title="Beach"
        imgSrc={require("../../assets/images/beach.jpg")}
        imgScore={7}
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require("../../assets/images/mountain.jpg")}
        imgScore={8.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
