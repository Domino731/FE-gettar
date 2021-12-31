import React, { FunctionComponent, useState } from "react";
import { TextInput, View, StyleSheet, Text , Dimensions} from "react-native";
import { theme } from "../../../styles/theme";
import { IFNoteData } from "../../../types";
import { Corner } from "../../general/corner";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const AddNewNote: FunctionComponent = () => {
  // data about note
  const [note, setNote] = useState<IFNoteData>({
    title: "",
    content: "asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd asddddddddddddddddddddddddddddddddd asddddddddddddddddddddddddddddddddd asdddddddddddddddddddddddddddddddd assssssssssssssssssssssssssss assssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ",
  });

  /**
   * change note state
   * @param value - new value
   * @param key - object key - 'title' or 'content'
   * @returns setNote()
   */
  const handleChangeNote = (value: string, key: "title" | "content") => {
    return setNote((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      {/* title and input */}
      <View style={styles.titleInputWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Cyber note title</Text>
          <Corner
            width={16}
            height={16}
            right={-8}
            bottom={-8}
            backgroundColor={theme.darkSlateGray}
            additionStyles={{
              borderTopWidth: 3,
              zIndex: 2,
            }}
            transformRotate={-135}
          />
        </View>

        <TextInput
          style={styles.titleInput}
          onChangeText={(v) => handleChangeNote(v, "title")}
          // @ts-ignore
          value={note.title}
          placeholder="Put note title here"
          placeholderTextColor="#fff"
        />
        <Corner
          width={40}
          height={40}
          right={-21}
          top={-21}
          backgroundColor={theme.yellow}
          borderColor={theme.electric}
          additionStyles={{
            borderTopWidth: 3,
            zIndex: 2,
          }}
          transformRotate={-135}
        />
      </View>

      {/* input for note content */}

      <KeyboardAwareScrollView>
      <View style={styles.contentWrapper}>
      <TextInput
      style={styles.contentInput}
        multiline={true}
        numberOfLines={4}
        onChangeText={v => handleChangeNote(v, 'content')}
        // @ts-ignore
        value={note.content}
      />
      </View>
     </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  titleWrapper: {
    position: "relative",
    width: "45%",
    height: 29,
    backgroundColor: theme.electric,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //overflow: "hidden"
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
  titleInputWrapper: {
    marginTop: 25,
    width: "100%",

    height: 70,
    backgroundColor: theme.darkSlateGray,
    borderWidth: 2,
    borderColor: theme.electric, // theme.darkSlateGray
  },
  titleInput: {
    width: "100%",
    height: "47%",
    fontSize: 18,
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: theme.yellow,
    borderBottomWidth: 2,
    color: "#fff",
  },
  contentWrapper: {
    width: "100%",
    height: Dimensions.get('window').height - 200,
    backgroundColor: theme.electric,
  },
  contentInput: {
      lineHeight: 20,
      width: "100%",
      letterSpacing: 9,
      backgroundColor: '#fff'
  }
});
