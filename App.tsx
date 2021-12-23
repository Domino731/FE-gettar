
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ImageBackground  } from 'react-native';
import { AuthForm } from './components/auth/authForm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthForm/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
   image: {
    flex: 1,
    justifyContent: "center"
  },
});
