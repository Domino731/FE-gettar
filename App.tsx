import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Triangle} from "./src/components/Triangle/Triangle";
import {Auth} from "./src/containers/auth";
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/styles/theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <Auth/>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
