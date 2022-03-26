import React from "react";
import {AuthFormikWrapper} from "./FormikWrapper";
import {LoginConfig} from "./authConfig";

export const Login: React.FC = () => {
    return <AuthFormikWrapper config={LoginConfig}/>
}