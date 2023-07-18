import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "../helpers/styles";

export default InputGroup = ({ value, setValue, error, label }) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput value={value} onChangeText={setValue} style={styles.input} />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};
