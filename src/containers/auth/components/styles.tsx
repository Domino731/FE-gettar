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