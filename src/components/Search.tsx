import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import SearchBar from "../features/launches/SearchBar";

export default function Search() {
  return (
    <StyledSearch>
      <StyledTitle>Digite o nome da missao que deseja</StyledTitle>
      <SearchBar />
    </StyledSearch>
  );
}

const StyledSearch = styled.View`
  flex-direction: column;
  width: 100%;
`;

const StyledTitle = styled.Text`
  font-size: ${RFValue(9, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
