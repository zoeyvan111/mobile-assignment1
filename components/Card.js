import { View, Text } from "react-native";
import React from "react";
import styles from "../helpers/styles";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
