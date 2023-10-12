import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
export const deviceFontScale = Dimensions.get("window").fontScale;

export const StyledStart = styled.View``;

export const StyledHome = styled.View``;