import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { theme } from "../../../styles/theme";
export const CableConnectionDecoration: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line1} />
      <View style={styles.line12} />
      <View style={styles.line13} />

      <View style={styles.line2} />
      <View style={styles.line22} />
      <View style={styles.line23} />

      <View style={styles.line3} />
      <View style={styles.line32} />
      <View style={styles.line33} />


      <View style={styles.connector1}/>
      <View style={styles.connector12}/>
      <View style={styles.connector2}/>
      <View style={styles.connector22}/>
      <View style={styles.connector3}/>
      <View style={styles.connector32}/>
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
    height: 58,
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
    height: 25,
    left: 235,
    backgroundColor: theme.crimson,
  },

  line2: {
    position: "absolute",
    top: -4,
    width: 3,
    height: 31,
    left: 75,
    backgroundColor: theme.crimson,
  },
  line22: {
    position: "absolute",
    top: 25,
    width: 189,
    height: 3,
    left: 75,
    backgroundColor: theme.crimson,
  },
  line23: {
    position: "absolute",
    width: 3,
    top: 28,
    height: 42,
    left: 261,
    backgroundColor: theme.crimson,
  },
  connector1: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: theme.crimson,
    left: 97,
    top: 8,
    borderRadius: 2
  },
  connector12: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: theme.crimson,
    left: 283,
    top: 8,
    borderRadius: 2
},
connector2: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: theme.crimson,
    left: 72,
    top: 22,
    borderRadius: 2
  },
  connector22: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: theme.crimson,
    left: 258,
    top: 22,
    borderRadius: 2
},
connector3: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: theme.crimson,
    left: 47,
    top: 39,
    borderRadius: 2
  },
  connector32: {
    position: "absolute",
    width: 9,
    height: 9,
    backgroundColor: theme.crimson,
    left: 232,
    top: 39,
    borderRadius: 2
},
});
