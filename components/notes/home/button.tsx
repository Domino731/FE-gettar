import React, { FunctionComponent } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { theme } from "../../../styles/theme";
import { Corner } from "../../general/corner";

export const Button: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    
      {/*   decorations */}
      <Corner
        width={20}
        height={20}
        right={-9}
        bottom={-9}
        backgroundColor={theme.yellow}
        borderColor={theme.electric}
        additionStyles={{
          borderTopWidth: 2,
          zIndex: 2,
        }}
        transformRotate={-45}
      />
    <View style={styles.decorativeLineTopLeft}/>
    <View style={styles.decorativeLineTopRight}/>
    <View style={styles.decorativeLineBotLeft}/>
    <View style={styles.decorativeLineBotRight}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    position: "relative",
    marginTop: 16,
  },
  btn: {
    
    width: "100%",
    backgroundColor: theme.darkSlateGray,
    borderColor: theme.electric,
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.electric,
    fontWeight: "bold",
    fontSize: 26,
  },
  decorativeLineTopLeft: {
      position: "absolute",
      top: 0,
      left: 30,
      zIndex: 2,
      width: 2, 
      height: 14,
      backgroundColor: theme.electric,
  },
  decorativeLineTopRight: {
    position: "absolute",
    top: 0,
    right: 30,
    zIndex: 2,
    width: 2, 
    height: 14,
    backgroundColor: theme.electric,
  },
  decorativeLineBotLeft: {
    position: "absolute",
    bottom: 0,
    left: 30,
    zIndex: 2,
    width: 2, 
    height: 14,
    backgroundColor: theme.electric,
  },
  decorativeLineBotRight: { position: "absolute",
  bottom: 0,
  right: 30,
  zIndex: 2,
  width: 2, 
  height: 14,
  backgroundColor: theme.electric,},
});
