import React from "react";
import {AuthFormikWrapper} from "./FormikWrapper";
import {RegisterConfig} from "./authConfig";

export const Register: React.FC = () => <AuthFormikWrapper config={RegisterConfig}/>