import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  children?: any;
  style?: any;
}
const Card = ({ children, style }: Props) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
});
export default Card;
