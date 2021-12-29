import { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Nav } from "../nav/nav";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Notes } from "../notes/notes";
import { Progress } from "../progress/progress";
import { Tasks } from "../tasks/tasks";

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
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="dashboard"
          >

            <Stack.Screen showLabel={false} name="notes" component={Notes} />
            <Stack.Screen showLabel={false} name="progress" component={Progress} />
            <Stack.Screen showLabel={false} name="tasks" component={Tasks} />
           
          </Stack.Navigator>

          <Nav />
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
  },
  image: {
    flex: 1,
  },
});
