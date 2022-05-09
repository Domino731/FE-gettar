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
export const FormikInputWrapper = styled.View`
display: flex;
flexDirection: row;
height: 50px;
marginBottom: 20;
`

export const InputIconWrapper = styled.View`
height: 100%;
width: 50px;
backgroundColor: ${({theme}: any) => theme.yellow};
position: relative;
overflow: hidden;
display: flex;
alignItems: center;
justifyContent: center;
`
const bigTriangleProps = `
width: 26px;
height: 26px;
position: absolute;
transform: rotate(45deg);
zIndex: 20;
`

const smallTriangleProps = `
width: 10px;
height: 10px;
position: absolute;
transform: rotate(45deg);
zIndex: 20;
`
export const InputIconTriangleTop = styled.View`
${bigTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
left: -13px;
top: -13px;
`

export const InputIconTriangleBottom = styled.View`
${smallTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
left: -5px;
bottom: -5px;
`

export const InputWrapper = styled.View`
width: 40px;
height: 100%;
flex: 1;
position: relative;
overflow: hidden;
`

export const InputWrapperTriangleTop = styled.View`
${smallTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
right: -5px;
top: -5px;
border: 1px solid ${({theme}: any) => theme.yellow};
`

export const InputWrapperTriangleBottom = styled.View`
${smallTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
right: -5px;
bottom: -5px;
border: 1px solid ${({theme}: any) => theme.yellow};
`

export const TextInputWrapper = styled.TextInput``

export const ButtonWrapper = styled.View`
height: 50px;
backgroundColor: ${({theme}: any) => theme.yellow};
position: relative;
overflow: hidden;
`
export const ButtonWrapperTriangleRightTop = styled.View`
${smallTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
right: -5px;
bottom: -5px;
`;

export const ButtonWrapperTriangleRightBottom = styled.View`
${smallTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
right: -5px;
top: -5px;
`;

export const ButtonWrapperTriangleLeftBottom = styled.View`
${bigTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
left: -13px;
bottom: -13px;
`;

export const ButtonWrapperTriangleLeftTop = styled.View`
${smallTriangleProps}
backgroundColor: ${({theme}: any) => theme.black};
left: -5px;
top: -5px;
`;

export const FormikButton = styled.Pressable`
width: 100%;
height: 100%;
display: flex;
alignItems: center;
justifyContent: center;
`;

export const FormikButtonDecorationLine = styled.View`
position: absolute;
right: 40px;
width: 2px;
height: 100%;
background: ${({theme}) => theme.black};
`;

export const FormikButtonText = styled.Text`
fontWeight: bold;
fontSize: 30px;
color: ${({theme}: any) => theme.black};
`

export const FormikDecorationLine = styled.View`
marginBottom: 20px;
marginLeft: 50px;
height: 70px;
width: 2px;
backgroundColor: ${({theme}: any) => theme.electric};
`