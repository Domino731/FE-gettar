import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../styles/theme";
import { IFPropsBorderLine, IFPropsNavButton } from "../../types";

export const Nav: FunctionComponent = () => {
  // reference
  const navigation = useNavigation();

  // state which is pointing at the active section
  const [currentSection, setCurrentSection] = useState<
    "notes" | "progress" | "tasks"
  >("notes");

  const handleChangeCurrentSection = useCallback(
    (section: "notes" | "progress" | "tasks") => {
      // @ts-ignore
      navigation.navigate(section);
      return setCurrentSection(section);
    },
    [currentSection]
  );

  return (
    <View style={styles.container}>
      <NavButton
        text={"tasks"}
        active={currentSection ==="tasks"}
        changeSectionHandler={() => handleChangeCurrentSection("tasks")}
      />

      <NavButton
        text={"progress"}
        active={currentSection ==="progress"}
        changeSectionHandler={() => handleChangeCurrentSection("progress")}
      />

      <NavButton
        text={"notes"}
        active={currentSection ==="notes"}
        changeSectionHandler={() => handleChangeCurrentSection("notes")}
      />

    </View>
  );
};

const NavButton: FunctionComponent<IFPropsNavButton> = ({
  text,
  active,
  changeSectionHandler,
}) => {
  return (
    <Pressable
      style={[styles.btn, { backgroundColor: active ? theme.yellow : theme.black}]}
      onPress={changeSectionHandler}
    >
      <Text style={[styles.btnText, { color: active ? theme.black : '#fff'}]}> {text}</Text>

      {active && <>
        <View style={styles.cornetLeft} />
      <View style={styles.cornetRight} />
      <View style={styles.cornetBotLeft} />
      <View style={styles.cornetBotRight} />
      </>}
    
    </Pressable>
  );
};

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
    paddingBottom: 8,
  },
  btn: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginLeft: 14,
    marginRight: 14,
    position: "relative",
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
  },
});
