import React from "react";
import { Text, View, StyleSheet } from "react-native";
interface Props {
  round: number;
}
const EndGameScreen = ({ round }: Props) => {
  return <Text>You played {round} rounds.</Text>;
};
const styles = StyleSheet.create({});
export default EndGameScreen;
