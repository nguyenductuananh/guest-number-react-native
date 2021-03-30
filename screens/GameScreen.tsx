import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ListViewBase,
} from "react-native";
import Card from "../components/Card";
interface Props {
  choosedNumber: number;
  onHaveRound: (n: number) => void;
}
const GameScreen = ({ choosedNumber, onHaveRound }: Props) => {
  const number = useRef<number>(choosedNumber);
  const [currentNumber, setCurrentNumber] = useState<number>(
    Math.floor(Math.random() * 99)
  );
  const [round, setRound] = useState<number>(0);
  const limit = useRef<{ max: number; min: number }>({ max: 99, min: 0 });
  const randomNumber = (): void => {
    let { max, min } = limit.current;
    setCurrentNumber(
      Math.floor(Math.ceil(Math.random() * (max - min + 1) + min))
    );
  };

  useEffect(() => {
    if (currentNumber === number.current) {
      onHaveRound(round);
    }
  }, [currentNumber]);
  const gamePlay = (button: string) => {
    if (
      (button === "lower" && currentNumber < number.current) ||
      (button === "greater" && currentNumber > number.current)
    ) {
      Alert.alert("Don't lie...", "I know you know the correct answer", [
        { style: "destructive", text: "OK" },
      ]);
      return;
    }
    if (button === "lower") {
      limit.current.max = currentNumber;
    } else {
      limit.current.min = currentNumber;
    }
    let r = round;
    setRound(r + 1);
    randomNumber();
  };
  return (
    <View style={styles.container}>
      <Card style={{ width: "45%", height: 300 }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Your number :</Text>
          <Text style={styles.text}>{currentNumber}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={() => {
              gamePlay("lower");
            }}
          />
          <Button
            title="Greater"
            onPress={() => {
              gamePlay("greater");
            }}
          />
        </View>
      </Card>
      <Text>{number.current}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 50,
  },
  text: {
    fontSize: 17,
    textAlign: "center",
  },
  textContainer: { marginVertical: 16 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default GameScreen;
