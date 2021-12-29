import React, { FunctionComponent } from "react";
import {View, StyleSheet} from "react-native"
import { IFPropsCorner } from "../../types";
export const Corner : FunctionComponent<IFPropsCorner> = ({
    width,
    height,
    top,
    left,
    right,
    bottom,
    backgroundColor,
    transformRotate,
    borderColor,
    borderWidth,
    additionStyles
}) => {
    const styles = StyleSheet.create({
       corner: {
        position: "absolute",
        width: width,
        height: height,
        top: top ? top : 'auto',
        left: left ? left : 'auto',
        bottom: bottom ? bottom: 'auto',
        right:  right ? right : 'auto',
        backgroundColor: backgroundColor,
        transform: [{ rotate:  transformRotate ? `${transformRotate}deg` : '45deg' }],
        borderColor: borderColor ? borderColor : "transparent",
        borderWidth: borderWidth ? borderWidth : 0,
        ...additionStyles
       }
    })
return <View style={styles.corner}/>
}