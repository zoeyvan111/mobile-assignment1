import React from "react";
import { View, Modal, TextInput, Text, Button, Alert } from "react-native";
import Card from "../components/Card";

import styles from "../helpers/styles";

export default function ButtonsScreen({
  setShowPage,
  setShowSadFace,
  email,
  phoneNumber,
}) {
  return (
    <View style={styles.background}>
      <Card>
        <Text>You have entered:</Text>
        <Text>{email}</Text>
        <Text>{phoneNumber}</Text>
        <Text>Please confirm they are correct.</Text>
        <Button
          color="red"
          title="Go back"
          onPress={() => {
            setShowPage(0);
          }}
        />
        <Button
          title="Confirm"
          onPress={() => {
            setShowPage(2);
            setShowSadFace(false);
          }}
        />
        <Button
          title="Finish Later"
          onPress={() => {
            setShowPage(2);
            setShowSadFace(true);
          }}
        />
      </Card>
    </View>
  );
}
