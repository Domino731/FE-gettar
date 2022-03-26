import React from "react";
import {AuthConfigInterface} from "../types";
import {FormikInputWrapper} from "./styles";
import {InputIcon} from "./InputIcon";
import {Input} from "./Input";

interface InputProps {
    config: AuthConfigInterface;
}

export const FormikInput: React.FC<InputProps> = ({config}) => {
    return <FormikInputWrapper>
        <InputIcon/>
        <Input config={config}/>
    </FormikInputWrapper>
}