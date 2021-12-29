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
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        position: "relative",
    },
  btn: {
    marginTop: 16,
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
});
