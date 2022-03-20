import React from "react";
import {ActionBarWrapper, ActionBottomWave, ActionPressable, ActionText, ActionTopWave} from "./components/styles";
import {Wave} from "../../components/Wave/wave";

export const ActionBar: React.FC = () => {
    return <>
        <ActionBarWrapper>
            <ActionTopWave/>
            <ActionBottomWave/>
            <ActionPressable>
                <ActionText>Zaloguj</ActionText>
            </ActionPressable>
            <ActionPressable>
                <ActionText>Zarejestruj</ActionText>
            </ActionPressable>
            <ActionPressable>
                <ActionText>Odzyskaj hasło</ActionText>
            </ActionPressable>
        </ActionBarWrapper>
    </>
}