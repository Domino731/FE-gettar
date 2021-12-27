import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SignIn } from "./signIn";
import { theme } from "../../styles/theme";
import { AuthHeader } from "./header";
import Navigator from "./routes";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./SignUp";
import { PasswordRecovery } from "./passwordRecovery";
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent'
  },
};

export const AuthForm: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      {/* <SignIn/> */}
      <NavigationContainer theme={MyTheme}>
       <AuthHeader />
        <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}
            initialRouteName='dashboard'
          >
              <Stack.Screen showLabel={false} name="passwordRecovery" component={PasswordRecovery} />
          <Stack.Screen showLabel={false} name="signIn" component={SignIn} />
          <Stack.Screen showLabel={false} name="signUp" component={SignUp} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
    paddingLeft: 12,
    paddingRight: 12,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
