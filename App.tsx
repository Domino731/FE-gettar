
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ImageBackground  } from 'react-native';
import { AuthForm } from './components/auth/authForm';
import { auth } from './firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Content } from './components/app/content';

export default function App() {

  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
     return onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  if(isLogged === null) {
    return <Text>Loading...</Text>
  }
  return (
    <SafeAreaView style={styles.container}>
       {isLogged ? <Content/> : <AuthForm/>}
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
    justifyContent: "center",
  },
});
