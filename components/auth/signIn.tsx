import React, { FunctionComponent, useCallback, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { authStyles } from "./generalStyles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../styles/theme";
import { Entypo } from "@expo/vector-icons";
 import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export const SignIn: FunctionComponent = () => {

  // references
  const navigation = useNavigation();

  const [errorText, setErrorText] = useState<string>("as");

  const [data, setData] = useState<{email: string, password: string}>({
    email: '', password: ''
  });

   /** auth operation responsible for logging user */
   const handleLogin =  useCallback( () => {
    

    // clear previous errors
    setErrorText('');

    return (
       signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {

        })
        // catching errors
        .catch((error) => {
          // set errors and notify user about them
          const errorCode = error.code;

          // display errors
          if (errorCode === "auth/invalid-email") {
           setErrorText("Invalid e-mail");
          } else if (errorCode === "auth/missing-email") {
           setErrorText("Enter e-mail");
          } 
          if (errorCode === "auth/wrong-password") {
          setErrorText("Wrong password");
          }
          if(errorCode === "auth/too-many-requests"){
            setErrorText("Too many failed attempts to login, try restart your password");
          }
        })
    );
  }, [data]);

  return (
    <>
      {errorText && <View style={authStyles.errorWrapper}>

        <Text style={authStyles.errorText}>Error: asdasd</Text>

        {/* decorations */}
        <View style={authStyles.errorDecorationLineRight} />
        <View style={authStyles.errorDecorationLineRightSecond} />
        <View style={authStyles.errorDecorationRight} />
        </View>}



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
              style={authStyles.input}
              placeholder="E-mail"
              placeholderTextColor="#717171"
            />
            <View style={authStyles.inputDecoration} />
          </View>
        </View>

        {/* password input */}
        <View style={authStyles.inputWrapper}>
          {/* icon */}
          <View style={authStyles.icon}>
            <View style={authStyles.iconWrapper}>
              <View style={authStyles.iconDecoration} />
              <AntDesign name="lock" size={25} color={theme.black} />
            </View>
          </View>

          {/* input */}
          <View style={authStyles.inputContent}>
            <TextInput
              style={authStyles.input}
              placeholder="Password"
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
          <Pressable style={authStyles.button}>
            <Text style={authStyles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
