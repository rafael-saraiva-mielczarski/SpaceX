import { ReactNode } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceWidth } from "../global/styles";
import styled from "styled-components/native";

type LoadingProps = {
  children: ReactNode;
};

export default function Error({ children }: LoadingProps) {
  return (
    <StyledError>
      <StyledErrorMsg>{children}</StyledErrorMsg>
    </StyledError>
  );
}

const StyledError = styled.View`
  margin: 40px;
`;

const StyledErrorMsg = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
