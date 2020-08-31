import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imgSrc, imgScore }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imgSrc} />
      <Text>Image score: {imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
