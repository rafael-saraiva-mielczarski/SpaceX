import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons"

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
export const deviceFontScale = Dimensions.get("window").fontScale;

export const StartContainer = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.black};
justify-content: space-evenly;
align-items: center;
`;

export const Logo = styled.Image`
width: ${RFValue(180, deviceWidth)}px;
height: ${RFValue(30, deviceWidth)}px;
`;

export const Title = styled.Text`
font-size: ${({ theme }) => RFValue(theme.fontSize.m, deviceWidth)}px;
color: ${({ theme }) => theme.colors.white};
font-family: ${({ theme }) => theme.fonts.medium};
text-align: center;
`;

export const Astronaut = styled.Image`
width: ${RFValue(160, deviceWidth)}px;
height: ${RFValue(145, deviceWidth)}px;
`;

export const HomeContainer = styled.View``;

export const LaunchDetailsContainer = styled.View``;

export const LaunchDetailsMain = styled.ScrollView`
padding: 30px 25px;
`;

export const LaunchDetailsStart = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const LaunchMid = styled.View`
padding: 15px 0;
align-items: center;
`;

export const Description = styled.Text`
font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
color: ${({ theme }) => theme.colors.black};
font-family: ${({ theme }) => theme.fonts.regular};
margin-bottom: 5px;
`;

export const LaunchDescription = styled.Text`
font-size: ${({ theme }) => RFValue(theme.fontSize.s, deviceWidth)}px;
color: ${({ theme }) => theme.colors.black};
font-family: ${({ theme }) => theme.fonts.bold};
text-align: center;
`;

export const ReturnIcon = styled(AntDesign)`
font-size: ${RFValue(28)}px;
color: ${({ theme }) => theme.colors.white};
padding-right: 10px;
flex-grow: 1;
`

export const LaunchName = styled.Text`
font-size: ${({ theme }) => RFValue(theme.fontSize.ml, deviceWidth)}px;
color: ${({ theme }) => theme.colors.white};
font-family: ${({ theme }) => theme.fonts.bold};
flex-grow: 1.5;
`;