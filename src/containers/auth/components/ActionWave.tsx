import React from "react";
import {ActionBottomWave, ActionTopWave, ActionWaveSharpElement} from "./styles";

export enum ACTION_WAVE_PROPS_POSITION {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
}

interface ActionWaveProps {
    position: keyof typeof ACTION_WAVE_PROPS_POSITION;
}

export const ActionWave: React.FC<ActionWaveProps> = ({position}) => {
    if (position === ACTION_WAVE_PROPS_POSITION.BOTTOM) {
        return <ActionBottomWave>
            <ActionWaveSharpElement position={position}/>
        </ActionBottomWave>
    }
    return <ActionTopWave>
        <ActionWaveSharpElement position={position}/>
    </ActionTopWave>
}