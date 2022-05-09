import React from "react";
import {InputWrapper, InputWrapperTriangleBottom, InputWrapperTriangleTop, TextInputWrapper} from "./styles";
import {TextInput} from "react-native";
import {theme} from "../../../styles/theme";
import {AuthConfigInterface} from "../types";
import {useField} from "formik";

interface InputProps {
    config: AuthConfigInterface;
}

export const Input: React.FC<InputProps> = ({config}) => {
    const [field] = useField(config.name);

    return <InputWrapper>
        <InputWrapperTriangleTop/>
        <InputWrapperTriangleBottom/>
        <TextInput
            onChangeText={(v) => field.onChange({target: {name: config.name, value: v}})}
            style={{
                height: 50,
                borderColor: theme.yellow,
                borderWidth: 1,
                color: theme.electric,
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: 20
            }}
            placeholder={config.label}
            placeholderTextColor={theme.placeholder}
        />
    </InputWrapper>
}