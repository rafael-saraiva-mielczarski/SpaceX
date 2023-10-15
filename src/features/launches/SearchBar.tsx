import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { filterLaunch } from "./launchesSlice";
import styled from "styled-components/native";
import Input from "../../components/Input";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export default function SearchBar() {
  const launches = useAppSelector((state) => state.launches.launches);
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterLaunch(query));
  }, [query, launches]);

  return (
    <StyledSearchBar>
      <StyledBar>
        <Input
          textInputConfig={{
            placeholder: "Nome da missao",
            maxLength: 30,
            onChangeText: (value: string) => {
              setQuery(value);
            },
          }}
        ></Input>
      </StyledBar>
      <StyledIcon>
        <SearchIcon name="search" />
      </StyledIcon>
    </StyledSearchBar>
  );
}

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
  font-size: ${Platform.OS === "android" ? RFValue(25) : RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black};
  padding-right: 10px;
`;
