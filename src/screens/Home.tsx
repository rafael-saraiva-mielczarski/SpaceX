import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import * as S from "../global/styles";
import Header from "../components/Header";
import Search from "../components/Search";
import LaunchCard from "../features/launches/LaunchCard";
import LaunchList from "../components/LaunchList";

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.StyledHome>
        <Header justifyContent="center">
          <Search />
        </Header>
        <LaunchList />
      </S.StyledHome>
    </TouchableWithoutFeedback>
  );
}
