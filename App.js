import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on a switch", key: 3 },
  ]);

  const submitHandler = (text) => {
    if (text.trim().length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todos must be over 3 chars long", [
        { text: "Understood" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} setTodos={setTodos} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,

    padding: 40,
  },
  list: {
    flex: 1,

    marginTop: 20,
  },
});
