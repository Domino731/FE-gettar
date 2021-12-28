import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../styles/theme";
import { IFPropsBorderLine, IFPropsNavButton } from "../../types";

export const Nav: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <NavButton text={'tasks'} active/>

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Progress</Text>
      </Pressable>

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}> Notes</Text>
      </Pressable>
    </View>
  );
};

const NavButton : FunctionComponent<IFPropsNavButton> = ({text, active}) => {
  return <Pressable style={[styles.btn, {backgroundColor: theme.yellow}]}>
  <Text style={[styles.btnText, {color: theme.black}]}> {text}</Text>
  <View style={styles.cornetLeft}/>
  <View style={styles.cornetRight}/>
  <View style={styles.cornetBotLeft}/>
  <View style={styles.cornetBotRight}/>
</Pressable>
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 66,
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.black,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    paddingBottom: 8
  },
  btn: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginLeft: 14,
    marginRight: 14,
    position: "relative"
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 3,
  },
  cornetLeft: {
    position: "absolute",
    width: 20,
    height: 20,
    top: -10,
    left: -10,
    backgroundColor: theme.yellow,
    transform: [{ rotate: "45deg" }],
  },
  cornetRight: {
    position: "absolute",
    width: 20,
    height: 20,
    top: -10,
    right: -10,
    backgroundColor: theme.yellow,
    transform: [{ rotate: "45deg" }],
  },

  cornetBotLeft: {
    position: "absolute",
    width: 20,
    height: 20,
    bottom: -10,
    left: -10,
    backgroundColor: theme.black,
    transform: [{ rotate: "45deg" }],
  },
  cornetBotRight: {
    position: "absolute",
    width: 20,
    height: 20,
    bottom: -10,
    right: -10,
    backgroundColor: theme.black,
    transform: [{ rotate: "45deg" }],
  }
});
