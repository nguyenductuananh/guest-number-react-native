import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import EndGameScreen from "./screens/EndGameScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
const App = () => {
  const [choosedNumber, setChoosedNumber] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const handlerSetRound = (n: number): void => {
    setRound(n);
  };
  const handlerStartGame = (n: number): void => {
    setChoosedNumber(n);
  };
  let content: any;
  choosedNumber
    ? (content = (
        <GameScreen
          choosedNumber={choosedNumber}
          onHaveRound={handlerSetRound}
        />
      ))
    : (content = <StartGameScreen onStartGame={handlerStartGame} />);
  round ? (
    (content = <EndGameScreen round={round} />)
  ) : (
    <StartGameScreen onStartGame={handlerStartGame} />
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Random Number Game</Text>
      </View>
      <View style={styles.content}>{content}</View>
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
