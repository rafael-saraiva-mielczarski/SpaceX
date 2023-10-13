import { ReactNode } from "react";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type LaunchInfoProps = {
  children: ReactNode;
  data: string | number | undefined;
};

export default function LaunchInfo({ children, data }: LaunchInfoProps) {
  return (
    <Info>
      <Text>{children}</Text>
      <Data>{data}</Data>
    </Info>
  );
}

const Info = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const Data = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
