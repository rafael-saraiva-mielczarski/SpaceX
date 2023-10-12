import styled from "styled-components/native";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import SearchBar from "../features/launches/SearchBar";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  return (
    <StyledSearch>
      <StyledTitle>Digite o nome da missao que deseja</StyledTitle>
      <StyledSearchBar>
        <StyledBar>
          <SearchBar />
        </StyledBar>
        <StyledIcon>
          <SearchIcon name="search" />
        </StyledIcon>
      </StyledSearchBar>
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

const StyledSearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledBar = styled.View`
  flex-grow: 1;
`;

const StyledIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 0 10px 10px 0;
  padding: 6.5px;
  border: 1px solid ${({ theme }) => theme.colors.input};
`;

const SearchIcon = styled(FontAwesome)`
  font-size: 25px;
  color: black;
  padding-right: 10px;
`;
