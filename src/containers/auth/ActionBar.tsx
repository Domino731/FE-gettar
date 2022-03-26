import React from "react";
import {ActionBarWrapper, ActionPressable, ActionText} from "./components/styles";
import {ActionWave} from "./components/ActionWave";
import {AUTH_TABS_INDEX} from "./types";

interface ActionBarProps {
onButtonPress: (v: AUTH_TABS_INDEX) => void;
currentTab: AUTH_TABS_INDEX;
}

export const ActionBar: React.FC<ActionBarProps> = ({onButtonPress, currentTab}) => {
    return <>
        <ActionBarWrapper>
            <ActionWave position="TOP"/>
            <ActionWave position="BOTTOM"/>
            <ActionPressable onPress={() =>  onButtonPress(AUTH_TABS_INDEX.LOGIN)}>
                <ActionText>Zaloguj</ActionText>
            </ActionPressable>
            <ActionPressable  onPress={() =>  onButtonPress(AUTH_TABS_INDEX.REGISTER)}>
                <ActionText>Zarejestruj</ActionText>
            </ActionPressable>
            <ActionPressable onPress={() =>  onButtonPress(AUTH_TABS_INDEX.PASSWORD_RECOVERY)}>
                <ActionText>Odzyskaj hasło</ActionText>
            </ActionPressable>
        </ActionBarWrapper>
    </>
}