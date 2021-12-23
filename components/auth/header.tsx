import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { theme } from "../../styles/theme";
import { BorderLine } from "../general/border";

export const AuthHeader: FunctionComponent = () => {

    const [currentForm, setCurrentForm] = useState<'signIn' | 'signUp' | 'passwordRecovery'>('signIn');
    // references
    const navigation = useNavigation();
    
    const handleChangeForm = (form: 'signIn' | 'signUp' | 'passwordRecovery') => {
      // @ts-ignore
      navigation.navigate(form);
      return setCurrentForm(form);
    }

    const buildIn = StyleSheet.create({
      active: {
        color: theme.electric
      }
    });


  return (
    <View>
      <Text style={styles.title}>GETTAR</Text>
      <Text style={styles.subTitle}>Change your workflow</Text>

      <BorderLine position="leftBot" />
      <View style={styles.navBar}>

        <Pressable style={styles.navItem} onPress={() => handleChangeForm('signIn')} >
          <Text style={[styles.navText, {color: (currentForm === 'signIn' ? theme.electric : '#fff') } ]} >Sign in</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => handleChangeForm('signUp')}>
          <Text style={[styles.navText, {color: (currentForm === 'signUp' ? theme.electric : '#fff') } ]}>Sign up</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => handleChangeForm('passwordRecovery')}>
          <Text  style={[styles.navText, {color: (currentForm === 'passwordRecovery' ? theme.electric : '#fff') } ]}>Password recovery</Text>
        </Pressable>

        
      </View>
      <BorderLine position="rightTop" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.yellow,
    textAlign: "center",
    paddingTop: 14,
    fontSize: 49,
    fontStyle: "italic",
    textShadowColor: theme.electric,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 6,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  subTitle: {
    color: theme.yellow,
    textAlign: "center",
    paddingTop: 4,
    paddingBottom: 27,
    fontSize: 18,
    textShadowColor: theme.electric,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
  },
  navItem: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  navText: {
      fontWeight: '700',
    fontSize: 18,
    color: "#fff",
  },
  
});
