import React, { FunctionComponent, useCallback, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { authStyles } from "./generalStyles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../styles/theme";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";

export const PasswordRecovery: FunctionComponent = () => {
  // references
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");

  const [errorText, setErrorText] = useState<string>("");

  const [successSendFlag, setSuccessSendFlag] = useState<boolean>(false);

  /** change email state */
  const handleChangeEmail = useCallback((text) => {
    setEmail(text);
  }, []);

  // send mail with next steps in order to reset user's password
  const handleResetPassword = useCallback(async () => {
    // clear error
    setErrorText("");

    return await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("E-mail with next steps was sent");

        // change state and inform user about success auth operation
        setSuccessSendFlag(true);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/invalid-email") {
          setErrorText("Invalid e-mail");
        } else if (errorCode === "auth/user-not-found") {
          setErrorText(`User with this e-mail doesn't exist`);
        } else if (errorCode === "auth/missing-email") {
          setErrorText(`Enter e-mail`);
        }
      });
  }, [email]);

  return (
    <>
      {!successSendFlag ? (
        <>
          {errorText ? (
            <View style={authStyles.errorWrapper}>
              <Text style={authStyles.errorText}>Error: {errorText}</Text>

              {/* decorations */}
              <View style={authStyles.errorDecorationLineRight} />
              <View style={authStyles.errorDecorationLineRightSecond} />
              <View style={authStyles.errorDecorationRight} />
            </View>
          ) : null}

          <View style={authStyles.form}>
            {/* email input */}
            <View style={authStyles.inputWrapper}>
              {/* icon */}
              <View style={authStyles.icon}>
                <View style={authStyles.iconWrapper}>
                  <View style={authStyles.iconDecoration} />
                  <Entypo name="email" size={25} color={theme.black} />
                </View>
              </View>

              {/* input */}
              <View style={authStyles.inputContent}>
                <TextInput
                  onChangeText={handleChangeEmail}
                  style={authStyles.input}
                  placeholder="E-mail"
                  placeholderTextColor="#717171"
                />
                <View style={authStyles.inputDecoration} />
              </View>
            </View>

            <View style={authStyles.buttonWrapper}>
              {/* decorations */}
              <View style={authStyles.buttonDecorationLeft} />
              <View style={authStyles.buttonDecorationRight} />

              {/* button */}
              <Pressable
                style={authStyles.button}
                onPress={handleResetPassword}
              >
                <Text style={authStyles.buttonText}>Send e-mail</Text>
              </Pressable>
            </View>
          </View>
        </>
      ) : null}

      {successSendFlag ? (
        <View style={styles.notificationWrapper}>
          <Text style={styles.textSmall}>
            The e-mail with next steps was sent successfully
          </Text>
          <Text style={styles.textBig}>Check your inbox</Text>

          {/* decorations */}
          <View style={styles.triangle} />
          <View style={styles.decorationLine} />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  notificationWrapper: {
    backgroundColor: theme.electric,
    marginTop: 23,
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    position: "relative",
    overflow: "hidden",
  },
  triangle: {
    position: "absolute",
    top: -11,
    right: -11,
    width: 22,
    height: 22,
    transform: [{ rotate: "45deg" }],
    backgroundColor: theme.black,
    borderWidth: 1,
    zIndex: 2,
  },
  textSmall: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  textBig: {
    paddingTop: 12,
    fontSize: 23,
    fontWeight: "bold",
  },
  decorationLine: {
    position: "absolute",
    height: 2,
    width: "55%",
    backgroundColor: theme.black,
    top: "70%"
  }
});
