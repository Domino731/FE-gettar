import React from "react";
import {View} from "react-native";
import styled from "styled-components/native";


interface WaveProps {
    width?: number;
    color?: string;
    height?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export const Wave = styled.View<WaveProps>`
position: absolute;
height: ${(props) => props.width ? props.width : 0};
width: ${(props) => props.width ? props.width : 0};
backgroundColor: ${(props) => props.color ? 'red' : "white"}
top: ${(props) => props.width ? props.top : 'auto'};
bottom: ${(props) => props.width ? props.bottom : 'auto'};
left: ${(props) => props.width ? props.left : 'auto'};
right: ${(props) => props.width ? props.right : 'auto'};
`