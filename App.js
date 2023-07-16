import React, { useState } from "react";
import { View, Modal, Text, Button, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginScreen from "./screen/LoginScreen";
import ResultScreen from "./screen/ResultScreen";
import ButtonsScreen from "./screen/ButtonsScreen";
import * as yup from "yup";
import styles from "./helpers/styles";
import colors from "./helpers/colors";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^(\d{10})$/, "Phone number must be a 10 digit number")
    .required("Phone number is required"),
});

export default function App() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPage, setShowPage] = useState(0); // 0: login, 1: buttons, 2: result
  const [showSadFace, setShowSadFace] = useState(false);

  return (
    <LinearGradient
      colors={[colors.backgroundStart, colors.backgourndEnd]}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.background}>
        {showPage == 0 ? <Text style={styles.topLabel}>Sign up</Text> : null}
        {showPage == 0 ? (
          <LoginScreen
            setShowPage={setShowPage}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            email={email}
            setEmail={setEmail}
          />
        ) : null}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPage === 1}
          onRequestClose={() => {
            setShowPage(0);
          }}
        >
          <SafeAreaView>
            <ButtonsScreen
              setShowSadFace={setShowSadFace}
              setShowPage={setShowPage}
              phoneNumber={phoneNumber}
              email={email}
            />
          </SafeAreaView>
        </Modal>
        {showPage == 2 ? (
          <ResultScreen showSadFace={showSadFace} phoneNumber={phoneNumber} />
        ) : null}
        {showPage === 2 ? (
          <Button title="Start Again" onPress={() => setShowPage(0)} />
        ) : null}
      </SafeAreaView>
    </LinearGradient>
  );
}
