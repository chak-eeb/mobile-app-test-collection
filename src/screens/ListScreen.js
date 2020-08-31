import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend#1", age: 30 },
    { name: "friend#2", age: 23 },
    { name: "friend#3", age: 22 },
    { name: "friend#4", age: 28 },
    { name: "friend#5", age: 45 },
    { name: "friend#6", age: 34 },
    { name: "friend#7", age: 31 },
    { name: "friend#8", age: 30 },
    { name: "friend#9", age: 40 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 35,
  },
});

export default ListScreen;
