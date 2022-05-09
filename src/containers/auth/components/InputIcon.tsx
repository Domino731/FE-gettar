import React from "react";
import {InputIconTriangleBottom, InputIconTriangleTop, InputIconWrapper} from "./styles";
import {Image} from "react-native";
import {getImageSource, ICON_NAME} from "../../../utils/images";

interface InputIconProps {
    iconName: keyof typeof ICON_NAME;
}

export const InputIcon: React.FC<InputIconProps> = ({iconName}) => {
    const iconSize = 35;
    return <InputIconWrapper>
        <InputIconTriangleTop/>
        <InputIconTriangleBottom/>
        <Image source={getImageSource(iconName)} style={{width: iconSize, height: iconSize}}/>
    </InputIconWrapper>
}