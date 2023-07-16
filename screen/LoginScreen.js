import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button, Alert } from "react-native";
import Card from "../components/Card";
import InputGroup from "../components/InputGroup";
import * as yup from "yup";

import styles from "../helpers/styles";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .number()
    .typeError("Phone number must be a number")
    .required("Phone number is required"),
});

export default function LoginScreen({
  setShowPage,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
}) {
  const [error, setError] = useState({});

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^(\d{10})$/, "Phone number must be a 10 digit number")
      .required("Phone number is required"),
  });

  const handleLogin = async () => {
    try {
      await schema.validate({ email, phoneNumber });
      setShowPage(1);
    } catch (error) {
      setError({ [error.path]: error.message });
    }
  };

  const resetLogin = () => {
    setEmail("");
    setPhoneNumber("");
    setError({});
  };

  return (
    <Card>
      <InputGroup
        value={email}
        setValue={setEmail}
        label="Email"
        error={error.email}
      />
      <InputGroup
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="Phone Number"
        error={error.phoneNumber}
      />
      <View style={styles.buttonPanel}>
        <Button
          color="red"
          style={styles.resetButton}
          title="Reset"
          onPress={resetLogin}
        />
        <Button title="Sign up" onPress={handleLogin} />
      </View>
    </Card>
  );
}
