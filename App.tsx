import React from "react";
import { View, StyleSheet, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Random Number Game</Text>
      </View>
      <View style={styles.content}>
        <StartGameScreen />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    backgroundColor: "pink",
    height: 80,
    paddingTop: 40,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
  },
  content: {
    flex: 1,
    width: "100%",
    borderColor: "red",
  },
});
export default App;
