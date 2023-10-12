import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceWidth } from "../global/styles";

export default function Input({ textInputConfig }: any) {
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
