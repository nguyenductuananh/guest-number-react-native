import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";

interface Props {
  onStartGame: (n: number) => void;
}
const StartGameScreen = ({ onStartGame }: Props) => {
  const [numberEntered, setNumberEntered] = useState<string>("");
  const [choosedNumber, setChoosedNumber] = useState<string>("");
  const handlerTextTyping = (text: string): void => {
    let formatedText: string = text.replace(/[^0-9]/gi, "");
    setNumberEntered(formatedText);
  };
  const handlerResetButton = (): void => {
    setNumberEntered("");
  };
  const handlerChooseButton = (): void => {
    if (!numberEntered) {
      Alert.alert("Oops!", "You need to choose a number!!", [
        { text: "Okey", style: "destructive", onPress: () => {} },
      ]);
      return;
    }
    setChoosedNumber(numberEntered);
  };
  const handlerStartButton = () => {
    if (!parseInt(choosedNumber)) {
      Alert.alert("Warning!!!", "You must choose a number from 1 to 99", [
        { text: "OK", style: "destructive" },
      ]);
      handlerResetButton();
      return;
    }
    onStartGame(parseInt(choosedNumber));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card style={styles.cardComp}>
          <View>
            <TextInput
              placeholder="Enter your number"
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              value={numberEntered}
              onChangeText={handlerTextTyping}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={handlerResetButton} />
            <Button title="Choose" onPress={handlerChooseButton} />
          </View>
        </Card>
        <View style={styles.startGameContainer}>
          <Text style={{ fontSize: 16, marginVertical: 20 }}>
            {choosedNumber ? `You choosed ${choosedNumber}.` : ""}
          </Text>
          {choosedNumber ? (
            <Button title="Start Game" onPress={handlerStartButton} />
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  cardComp: {
    width: "80%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
  },
  input: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  startGameContainer: {
    marginVertical: 20,
  },
});
export default StartGameScreen;
