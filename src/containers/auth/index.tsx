import React, {useState, useCallback} from "react";
import {Container, Title, TitleShadow, TitleWrapper} from "./components/styles";
import {ActionBar} from "./ActionBar";
import {AUTH_TABS_INDEX} from "./types";
import {AuthFormikWrapper} from "./FormikWrapper";
import {LoginConfig, PasswordRecoveryConfig, RegisterConfig} from "./authConfig";

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

        <ActionBar onButtonPress={handleChangeTabIndex} currentTab={tabIndex}/>

        {tabIndex === 0 && <AuthFormikWrapper config={LoginConfig} label="Zaloguj"/>}
        {tabIndex === 1 && <AuthFormikWrapper config={RegisterConfig} label="Zarejestruj się"/>}
        {tabIndex === 2 && <AuthFormikWrapper config={PasswordRecoveryConfig} label="Wyślij e-mail"/>}

    </Container>
}