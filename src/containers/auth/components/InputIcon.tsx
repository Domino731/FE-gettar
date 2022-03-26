import React from "react";
import {InputIconTriangleBottom, InputIconTriangleTop, InputIconWrapper} from "./styles";

export const InputIcon: React.FC = () => {
    return <InputIconWrapper>
        <InputIconTriangleTop/>
        <InputIconTriangleBottom/>
    </InputIconWrapper>
}