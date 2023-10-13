import { ReactNode } from "react";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type ButtonProps = {
  children: ReactNode;
  color?: string;
  borderColor?: string;
  bgColor?: string;
  onPress: () => void;
};

export default function AppButton({
  children,
  color,
  borderColor,
  bgColor,
  onPress,
}: ButtonProps) {
  return (
    <StyledAppButton
      onPress={onPress}
      borderColor={borderColor}
      bgColor={bgColor}
    >
      <StyledText color={color}>{children}</StyledText>
    </StyledAppButton>
  );
}

const StyledAppButton = styled.TouchableOpacity`
  border: 2px solid white;
  border-color: ${(props) => (props.borderColor === "black" ? "#000" : "#fff")};
  background-color: ${(props) => (props.bgColor === "black" ? "#000" : "#fff")};
  border-radius: 10px;
  padding: 12px 50px;
`;

const StyledText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.m, deviceWidth)}px;
  color: ${(props) => (props.color === "black" ? "#000" : "#fff")};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
