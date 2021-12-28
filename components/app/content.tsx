import { FunctionComponent } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Nav } from "../nav/nav";

export const Content: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
       
       
      
       <Nav />
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
    flex: 1
  },
});
