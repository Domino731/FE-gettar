import styled from "styled-components/native";
import {theme as appTheme} from "../../../styles/theme";

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

export const ActionText = styled.Text`
color: white;
fontSize: 17px;
`;

export const ActionTopWave = styled.View`
position: absolute;
width: 60px;
height: 5px;
top: 0;
left: 0;
backgroundColor: ${({theme}: any) => theme.yellow};
`;

export const ActionBottomWave = styled.View`
position: absolute;
width: 60px;
height: 5px;
bottom: 0;
right: 0;
backgroundColor: ${({theme}: any) => theme.yellow};
border-radius: 50;
`;