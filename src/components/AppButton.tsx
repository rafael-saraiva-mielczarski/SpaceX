import { ReactNode } from "react";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type ButtonProps = {
  children: ReactNode;
  color?: string;
  borderColor?: string;
  onPress: () => void;
};

export default function AppButton({
  children,
  color,
  borderColor,
  onPress,
}: ButtonProps) {
  return (
    <StyledAppButton onPress={onPress} borderColor={borderColor}>
      <StyledText color={color}>{children}</StyledText>
    </StyledAppButton>
  );
}

const StyledAppButton = styled.TouchableOpacity`
  border: 2px solid white;
  border-color: ${(props) => (props.borderColor === "black" ? "#000" : "#fff")};
  border-radius: 10px;
  padding: 12px 50px;
`;

const StyledText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.m, deviceWidth)}px;
  color: ${(props) => (props.color === "black" ? "#000" : "#fff")};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
