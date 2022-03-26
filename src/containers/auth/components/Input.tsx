import React from "react";
import {InputWrapper, InputWrapperTriangleBottom, InputWrapperTriangleTop, TextInputWrapper} from "./styles";
import {TextInput} from "react-native";
import {theme} from "../../../styles/theme";

export const Input: React.FC = () => {
    return <InputWrapper>
        <InputWrapperTriangleTop/>
        <InputWrapperTriangleBottom/>
        <TextInput style={{
            height: 50,
            borderColor: theme.yellow,
            borderWidth: 1,
            color: theme.electric,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 20
        }}/>
    </InputWrapper>
}