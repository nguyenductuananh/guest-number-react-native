import React from "react";
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";
import Card from "../components/Card";
interface Props {
  round: number;
  onRestart: () => void;
}
const EndGameScreen = ({ round, onRestart }: Props) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.text}>You played {round} rounds.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Restart" onPress={onRestart} />
          <Button
            title="Exit"
            onPress={() => {
              BackHandler.exitApp();
            }}
          />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  text: {
    marginVertical: 20,
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
export default EndGameScreen;
