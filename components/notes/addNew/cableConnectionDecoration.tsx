import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { theme } from "../../../styles/theme";
export const CableConnectionDecoration: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line1} />
      <View style={styles.line12} />
      <View style={styles.line13} />

      <View style={styles.line3} />
      <View style={styles.line32} />
      <View style={styles.line33} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 5,
  },
  line1: {
    position: "absolute",
    top: -4,
    width: 3,
    height: 15,
    left: 100,
    backgroundColor: theme.crimson,
  },
  line12: {
    position: "absolute",
    top: 11,
    width: 189,
    height: 3,
    left: 100,
    backgroundColor: theme.crimson,
  },
  line13: {
    position: "absolute",
    top: 12,
    width: 3,
    height: 49,
    left: 286,
    backgroundColor: theme.crimson,
  },

  line3: {
    position: "absolute",
    top: -4,
    width: 3,
    height: 49,
    left: 50,
    backgroundColor: theme.crimson,
  },
  line32: {
    position: "absolute",
    top: 42,
    width: 186,
    height: 3,
    left: 52,
    backgroundColor: theme.crimson,
  },
  line33: {
    position: "absolute",
    top: 45,
    width: 3,
    height: 15,
    left: 235,
    backgroundColor: theme.crimson,
  },

  line2: {
    position: "absolute",
    top: -4,
    width: 3,
    height: 15,
    left: 100,
    backgroundColor: theme.crimson,
  },
  line22: {
    position: "absolute",
    top: 11,
    width: 189,
    height: 3,
    left: 100,
    backgroundColor: theme.crimson,
  },
  line23: {
    position: "absolute",
    top: 12,
    width: 3,
    height: 49,
    left: 286,
    backgroundColor: theme.crimson,
  },
});
