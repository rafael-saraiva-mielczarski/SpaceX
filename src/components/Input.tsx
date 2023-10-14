import { RFValue } from "react-native-responsive-fontsize";
import { deviceWidth } from "../global/styles";
import styled from "styled-components/native";

type TextInputConfig = {
  placeholder: string;
  onChangeText: (value: string) => void;
  maxLength?: number;
};

interface InputProps {
  textInputConfig: TextInputConfig;
}

export default function Input({ textInputConfig }: InputProps) {
  return <StyledInput {...textInputConfig} />;
}

const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: "#959595",
})`
  border-radius: 10px 0 0 10px;
  background-color: ${({ theme }) => theme.colors.input};
  margin: 10px 0;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
`;
