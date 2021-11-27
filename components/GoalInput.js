import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enternedGoal, setEnternedGoal] = useState("");

  const goalInputHandler = (enternedGoal) => {
    setEnternedGoal(enternedGoal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enternedGoal);
    setEnternedGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          value={enternedGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" color="green" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#e0ffff'
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    backgroundColor: 'white',
    fontSize:18,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
