import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { authStyles } from "./generalStyles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../styles/theme";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { createUserDatabase } from "../../firebase/createAccount";

export const SignUp: FunctionComponent = () => {
  // references
  const navigation = useNavigation();

  const [errorText, setErrorText] = useState<string>("");


    // state with data necessary for create new user account in firebase data base
    const [data, setData] = useState<{
      email: string;
      password: string;
      repeat: string;
    }>({ email: "", password: "", repeat: "" });

  // clearing data
  useEffect(() => {
    return () => setData({ email: "", password: "", repeat: "" });
  }, []);

  // creating user profile and his initial data in firestore database
  const authAction =  () => {
    
    // remove previous errors
    setErrorText('');

    /** auth operation */
    return (
       createUserWithEmailAndPassword(auth, data.email, data.password)
        // if user's account has been created successfully, then redirect him to panel with account settings
        .then((userCredential) => {
          console.log("User created successfully");
          createUserDatabase(userCredential.user.uid);
        })

        // catching errors
        .catch((error) => {
          const errorCode = error.code;

          console.log(errorCode)
          // display errors
          if (errorCode === "auth/invalid-email") {
            return setErrorText("Invalid e-mail");
          } else if (errorCode === "auth/missing-email") {
            return setErrorText("Enter e-mail");
          }
          if (errorCode === "auth/weak-password") {
            return setErrorText("Password must have 6 characters at least" );
          }
        })
    );
  }

  /** try to create new user in firebase database */
  const signUp = () => {
    if (data.password === data.repeat) {
      return authAction();
    } else {
      if (data.password !== data.repeat) {
        setErrorText(`The passwords are not the same` );
      } 
    }
  }


  useEffect(()=> {
console.log(data)
  }, [data])
  /** change data state */
  const handleChangeData = useCallback((value, key) => {
    
    setData(prev => ({...prev, [key]: value}));
  }, []);
  
  return (
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
              style={authStyles.input}
              placeholder="E-mail"
              placeholderTextColor="#717171"
              onChangeText={(value) => handleChangeData(value, 'email')}
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
              onChangeText={(value) => handleChangeData(value, 'password')}
            />
            <View style={authStyles.inputDecoration} />
          </View>
        </View>

        {/* password repeat input */}
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
              placeholder="Repeat the password"
              placeholderTextColor="#717171"
              onChangeText={(value) => handleChangeData(value, 'repeat')}
            />
            <View style={authStyles.inputDecoration} />
          </View>
        </View>

        <View style={authStyles.buttonWrapper}>
          {/* decorations */}
          <View style={authStyles.buttonDecorationLeft} />
          <View style={authStyles.buttonDecorationRight} />

          {/* button */}
          <Pressable style={authStyles.button} onPress={signUp}>
            <Text style={authStyles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
