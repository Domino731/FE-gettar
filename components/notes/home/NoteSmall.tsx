import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";
import { IFPropsNoteSmall } from "../../../types";
import { Corner } from "../../general/corner";

export const NoteSmall: FunctionComponent<IFPropsNoteSmall> = ({
  location,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft: location === "right" ? 0 : 10,
          paddingRight: location === "left" ? 0 : 10,
        },
      ]}
    >
      <View style={styles.note}>
        <Text style={styles.title} numberOfLines={2}>
          Cyber note: {"\n"}
          React 16.0 features
        </Text>
        <Text numberOfLines={6} style={styles.noteText}>
          asd asdasdasdasda asdasdasdasd asdasdasdasdasdasd asd asdasdasdasda
          asdasdasdasd asdasdasdasdasdasd asd asdasdasdasda asdasdasdasd
          asdasdasdasdasdasd asd asdasdasdasda asdasdasdasd asdasdasdasdasdasd
          asd asdasdasdasda asdasdasdasd asdasdasdasdasdasd
        </Text>

        <Text style={styles.noteId}>Cyber ID: 23b54</Text>

        {/* decorations */}
        <View style={styles.chipDecoration} />
        <View style={styles.chipIndentation} />

        <Corner
          width={40}
          height={40}
          right={-21}
          bottom={-21}
          backgroundColor={theme.yellow}
          borderColor={theme.electric}
          additionStyles={{
            borderTopWidth: 3,
            zIndex: 2,
          }}
          transformRotate={-45}
        />
      </View>

      {/* electric line decorations */}
      <View style={styles.chipInput} />
      <View style={styles.electricLineVertical}/>
      <View style={styles.circleInput}/>
      <View style={styles.electricLineHorizontal}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 220,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 20,
    position: "relative",
  },
  noteId: {
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
    left: 20,
    //letterSpacing: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    borderBottomWidth: 2,
    borderColor: theme.electric, // theme.darkSlateGray
  },
  noteText: {
    fontSize: 15,
    textAlign: "justify",
    paddingRight: 7,
    color: '#000',
  },
  note: {
    paddingLeft: 21,
    height: "100%",
    borderWidth: 3,
    borderColor: theme.electric,
    position: "relative",
  },
  chipDecoration: {
    position: "absolute",
    height: "100%",
    width: 16,
    backgroundColor: theme.electric,
    zIndex: 2,
  },
  chipIndentation: {
    zIndex: 3,
    top: 97,
    left: -3,
    position: "absolute",
    height: 60,
    width: 7,
    backgroundColor: theme.yellow,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  chipInput: {
    position: "absolute",
    width: 50,
    height: 7,
    right: 20,
    top: 8,
    backgroundColor: theme.darkSlateGray,
  },
  electricLineVertical: {
    position: "absolute",
    width: 4,
    height: 12,
    right: 40,
    top: -4,
    backgroundColor: theme.crimson,
  },
  electricLineHorizontal: {
    position: "absolute",
    width: 200,
    height: 4,
    right: 45,
    top: -8,
    backgroundColor: theme.crimson,
  },
  circleInput: {
    position: "absolute",
    width: 9,
    height: 9,
    right: 38,
    top: -10,
    backgroundColor: theme.crimson,
    borderRadius: 6
  }
});
