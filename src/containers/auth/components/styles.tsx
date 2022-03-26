import styled from "styled-components/native";
import {theme as appTheme} from "../../../styles/theme";
import {ACTION_WAVE_PROPS_POSITION} from "./ActionWave";

export const Container = styled.View` 
backgroundColor: ${({theme}: any) => theme.black};
flex: 1;
paddingTop: 20;
paddingLeft: 15;
paddingRight: 15;
`;

export const TitleWrapper = styled.View`
position: relative;
width: 100%;
marginTop: 45px;
`
export const Title = styled.Text`
fontSize: 56;
color: ${({theme}: any) => theme.yellow};
letterSpacing: 8;
fontStyle: italic;
fontWeight: 900;
textAlign: center;
position: absolute;
width: 100%;
zIndex: 2;
`
export const TitleShadow = styled.Text`
fontSize: 56;
color: ${({theme}: any) => theme.electric};
letterSpacing: 8;
fontStyle: italic;
fontWeight: 900;
textAlign: center;
position: absolute;
width: 100%;
transform: translateX(5px);
`

/////////// ACTION COMPONENTS
export const ActionBarWrapper = styled.View`
flexDirection: row;
position: relative;
height: 60px;
marginTop: 90px;
border: 1px solid ${({theme}: any) => theme.yellow};
border-right-width: 0;
border-left-width: 0;
`

export const ActionPressable = styled.Pressable`
width: 33%;
height: 100%;
justifyContent: center;
alignItems: center;
`

interface ActionText {
    active: boolean;
}

export const ActionText = styled.Text<ActionText>`
color: ${(props: any) => props.active ? props.theme.electric : 'white'};
fontSize: 17px;
fontWeight: bold;
`;

export const ActionTopWave = styled.View`
position: absolute;
width: 60px;
height: 6px;
top: 0;
left: 0;
backgroundColor: ${({theme}: any) => theme.yellow};
overflow: hidden;
`;

export const ActionBottomWave = styled.View`
position: absolute;
width: 60px;
height: 6px;
bottom: 0;
right: 0;
backgroundColor: ${({theme}: any) => theme.yellow};
overflow: hidden;
`;

interface ActionWaveSharpElementProps {
    position: keyof typeof ACTION_WAVE_PROPS_POSITION;
}

export const ActionWaveSharpElement = styled.View<ActionWaveSharpElementProps>`
position: absolute;
width: 30px;
height: 30px;
left: ${(props: any) => props.position === 'BOTTOM' ? '-20px' : 'auto'};
top: ${(props: any) => props.position === 'BOTTOM' ? '-25px' : 'auto'};
right: ${(props: any) => props.position === 'TOP' ? '-20px' : 'auto'};
bottom: ${(props: any) => props.position === 'TOP' ? '-25px' : 'auto'};
transform: rotate(50deg);
backgroundColor: ${({theme}: any) => theme.black};
`
export const InputWrapper = styled.View`
display: flex;
height: 50px;
marginBottom: 20;
`

export const InputIconWrapper = styled.View`
height: 100%;
width: 50px;
backgroundColor: ${({theme}: any) => theme.yellow};
position: relative;
overflow: hidden;
`

export const InputIconTriangleTop = styled.View`
width: 26px;
height: 26px;
backgroundColor: ${({theme}: any) => theme.black};
position: absolute;
transform: rotate(45deg);
left: -13px;
top: -13px;
`