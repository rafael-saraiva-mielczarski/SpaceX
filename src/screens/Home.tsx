import { Text } from "react-native";
import * as S from "../global/styles";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Home() {
  return (
    <S.StyledHome>
      <Header justifyContent="center">
        <Search />
      </Header>
      <Text>Home</Text>
    </S.StyledHome>
  );
}
