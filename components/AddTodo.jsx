import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeTextHandler = (val) => {
    setText(val);
  };

  const addTodo = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new Todo..."
        onChangeText={changeTextHandler}
        value={text}
      />
      <Button title="add todo" color={"coral"} onPress={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
