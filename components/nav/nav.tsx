import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const Nav: FunctionComponent = () => {
return <View style={styles.container}>
    <Text>asd</Text>
</View>
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 66,
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.black
    }
})