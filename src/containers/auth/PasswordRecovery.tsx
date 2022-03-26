import React from "react";
import {AuthFormikWrapper} from "./FormikWrapper";
import {PasswordRecoveryConfig} from "./authConfig";


export const PasswordRecovery: React.FC = () => <AuthFormikWrapper config={PasswordRecoveryConfig}/>