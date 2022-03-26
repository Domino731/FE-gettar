import React from "react";
import {Text, View} from "react-native";
import {AuthFormikWrapper} from "./FormikWrapper";
import {LoginConfig} from "./authConfig";

export const Login: React.FC = () => {
    return <AuthFormikWrapper config={LoginConfig}/>
}