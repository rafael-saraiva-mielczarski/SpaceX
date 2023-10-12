import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
export const deviceFontScale = Dimensions.get("window").fontScale;

export const StyledStart = styled.View`
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

export const StyledHome = styled.View``;