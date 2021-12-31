import React, { FunctionComponent, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Nav } from "../nav/nav";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Progress } from "../progress/progress";
import { Tasks } from "../tasks/tasks";
import { NotesList } from "../notes/home/home";
import { AddNewNote } from "../notes/addNew/addNew";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "transparent",
  },
};

export const Content: FunctionComponent = () => {
  // state which is pointing to active keyboard flag
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);

  // add listeners which are responsible for detecting whether the keyboard is active
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    // remove listeners on unmount
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, []);

  const keyboardDidShow = () => {
    setIsKeyboardActive(true);
  };

  const keyboardDidHide = () => {
    setIsKeyboardActive(false);
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView  contentContainerStyle={{ flexGrow: 1, height: '100%'}}>
            <NavigationContainer theme={MyTheme}>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                initialRouteName="dashboard"
              >
                <Stack.Screen
                  showLabel={false}
                  name="notes-add"
                  component={AddNewNote}
                />
                <Stack.Screen
                  showLabel={false}
                  name="notes"
                  component={NotesList}
                />
                <Stack.Screen
                  showLabel={false}
                  name="progress"
                  component={Progress}
                />
                <Stack.Screen
                  showLabel={false}
                  name="tasks"
                  component={Tasks}
                />
              </Stack.Navigator>

              {!isKeyboardActive && <Nav />}
            </NavigationContainer>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
  },
});
