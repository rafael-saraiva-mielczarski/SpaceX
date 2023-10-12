import styled from "styled-components/native";
import Input from "../../components/Input";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string>();

  return (
    <StyledSearchBar>
      <Input
        textInputConfig={{
          placeholder: "Nome da missao",
          maxLength: 30,
          onChangeText: (value: string) => setQuery(value),
        }}
      ></Input>
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.View`
  justify-content: space-evenly;
`;
