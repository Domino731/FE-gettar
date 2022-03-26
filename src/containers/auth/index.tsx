import React, {useState, useCallback} from "react";
import {Text, View} from "react-native";
import {Container, Title, TitleShadow, TitleWrapper} from "./components/styles";
import {ActionBar} from "./actionBar";
import {AUTH_TABS_INDEX} from "./types";

export const Auth: React.FC = () => {

    const [tabIndex, setTabIndex] = useState<AUTH_TABS_INDEX>(0);

    const handleChangeTabIndex = useCallback((tabIndex: AUTH_TABS_INDEX) => {
        return setTabIndex(tabIndex);
    }, [tabIndex]);

    return <Container>
        <TitleWrapper>
            <Title>GETTAR</Title>
            <TitleShadow>GETTAR</TitleShadow>
        </TitleWrapper>

        <ActionBar onButtonPress={handleChangeTabIndex}  currentTab={tabIndex}/>

    </Container>
}