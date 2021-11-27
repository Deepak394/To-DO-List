import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Goalitem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.list}>
        <Text style={styles.listItem}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 8,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  listItem:{
      fontSize:18,
  }
});
export default Goalitem;
