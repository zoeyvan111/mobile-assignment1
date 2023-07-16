import { StyleSheet } from "react-native";
import colors from "./colors";
export default styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  background: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: colors.cardBackground,
    width: "75%",
    padding: 20,
    borderRadius: 5,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.primaryLabel,
    marginBottom: 10,
    padding: 5,
    margin: 10,
    marginTop: 0,
    textAlign: "center",
  },
  inputLabel: {
    margin: 10,
    color: colors.primaryLabel,
  },
  errorMessage: {
    color: colors.secondayLabel,
    marginBottom: 10,
  },
  buttonPanel: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  largeImage: {
    width: 100,
    height: 100,
  },
  largeEmoji: {
    fontSize: 100,
  },
  topLabel: {
    padding: 20,
    color: colors.primaryLabel,
    borderColor: colors.primaryLabel,
    borderWidth: 1,
    margin: 10,
    marginTop: 20,
    textAlign: "center",
  },
});
