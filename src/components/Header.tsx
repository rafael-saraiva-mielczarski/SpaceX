import { ReactNode } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceWidth } from "../global/styles";
import styled from "styled-components/native";

type HeaderProps = {
  children: ReactNode;
  justifyContent?: string;
};

export default function Header({ children, justifyContent }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderOptions justifyContent={justifyContent}>{children}</HeaderOptions>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
`;

const HeaderOptions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: ${RFValue(40, deviceWidth)}px 15px 15px;
`;
