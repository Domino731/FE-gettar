import {StyleSheet, Text, View} from 'react-native';
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
