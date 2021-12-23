import { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../styles/theme";
import { IFPropsBorderLine } from "../../types";

export const BorderLine: FunctionComponent<IFPropsBorderLine> = ({
  position,
  height,
  color,
  width,
  radius,
}) => {
  const styles = StyleSheet.create({
    line: {
      width: "100%",
      height: 1,
      backgroundColor: theme.yellow,
    },
    leftBot: {
      width: width ? width : "20%",
      height: height ? height : 4,
      backgroundColor: color ? color : theme.yellow,
      borderBottomRightRadius: radius ? radius : 10,
    },
    rightBot: {
        marginLeft: width ? width : "80%",
      width: width ? width : "20%",
      height: height ? height : 4,
      backgroundColor: color ? color : theme.yellow,
      borderBottomLeftRadius: radius ? radius : 10,
    },
    leftTop: {
      width: width ? width : "20%",
      height: height ? height : 4,
      backgroundColor: color ? color : theme.yellow,
      borderTopRightRadius: radius ? radius : 10,
    },
    rightTop: {
      marginLeft: width ? width : "80%",
      width: width ? width : "20%",
      height: height ? height : 4,
      backgroundColor: color ? color : theme.yellow,
      borderTopLeftRadius: radius ? radius : 10,
    },
    wrapper: {
      position: "relative",
    }
  });

  return (
    <View style={styles.wrapper}>
      {position === "leftTop" && <View style={styles.leftTop} />}
 {position === "rightTop" && <View style={styles.rightTop} />}
      <View style={styles.line}/>
        {position === "leftBot" && <View style={styles.leftBot} />}
        {position === "rightBot" && <View style={styles.rightBot} />}
     
    </View>
  );
};
