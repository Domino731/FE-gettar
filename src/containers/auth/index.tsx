import React from "react";
import {Text, View} from "react-native";
import {Container, Title, TitleShadow, TitleWrapper} from "./components/styles";
import {ActionBar} from "./actionBar";

export const Auth: React.FC = () => {
    return <Container>
        <TitleWrapper>
            <Title>GETTAR</Title>
            <TitleShadow>GETTAR</TitleShadow>
        </TitleWrapper>

        <ActionBar/>
    </Container>
}