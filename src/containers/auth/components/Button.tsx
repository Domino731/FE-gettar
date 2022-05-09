import React from "react";
import {
    ButtonWrapper,
    ButtonWrapperTriangleLeftBottom, ButtonWrapperTriangleLeftTop,
    ButtonWrapperTriangleRightBottom,
    ButtonWrapperTriangleRightTop,
    FormikButton, FormikButtonDecorationLine, FormikButtonText
} from "./styles";

interface ButtonProps {
    onPress: () => void;
    label: string;
}

export const Button: React.FC<ButtonProps> = ({onPress, label}) => {
    return <ButtonWrapper>
        <ButtonWrapperTriangleRightTop/>
        <ButtonWrapperTriangleRightBottom/>
        <ButtonWrapperTriangleLeftBottom/>
        <ButtonWrapperTriangleLeftTop/>
        <FormikButtonDecorationLine/>
        <FormikButton onPress={onPress}><FormikButtonText>{label}</FormikButtonText></FormikButton>
    </ButtonWrapper>
}