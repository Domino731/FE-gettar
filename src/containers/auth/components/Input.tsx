import React from "react";
import {AuthConfigInterface} from "../types";
import {InputWrapper} from "./styles";
import {InputIcon} from "./InputIcon";

interface InputProps {
    config: AuthConfigInterface;
}

export const Input: React.FC<InputProps> = ({config}) => {
    return <InputWrapper>
        <InputIcon/>
    </InputWrapper>
}