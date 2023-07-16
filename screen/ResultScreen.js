import React from "react";
import { StyleSheet, View, TextInput, Text, Image, Alert } from "react-native";
import Card from "../components/Card";
import styles from "../helpers/styles";

export default function ResultScreen({ showSadFace, phoneNumber }) {
  return (
    <Card>
      {!showSadFace ? (
        <View style={styles.center}>
          <Text>
            Thank you for signing up. Here's a picture for you based on the last
            digit of your phone number.
          </Text>
          <Image
            style={styles.largeImage}
            source={{
              uri: `https://picsum.photos/id/${phoneNumber.charAt(
                phoneNumber.length - 1
              )}/100/100`,
            }}
          />
        </View>
      ) : (
        <View style={styles.center}>
          <Text>Sorry to see you go.</Text>
          <Text style={styles.largeEmoji}>😞</Text>
        </View>
      )}
    </Card>
  );
}
