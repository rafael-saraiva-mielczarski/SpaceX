import { ReactNode } from "react";
import { ActivityIndicator } from "react-native";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type LoadingProps = {
  children: ReactNode;
};

export default function Loading({ children }: LoadingProps) {
  return (
    <StyledLoading>
      <StyledText>{children}</StyledText>
      <ActivityIndicator size="large" color="black" />
    </StyledLoading>
  );
}

const StyledText = styled.Text`
  padding-bottom: 15px;
  text-align: center;
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

const StyledLoading = styled.View`
  margin: 40px;
`;
