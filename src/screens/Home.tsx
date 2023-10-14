import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "react-native";
import * as S from "../global/styles";
import Header from "../components/Header";
import Search from "../components/Search";
import LaunchList from "../features/launches/LaunchList";

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.HomeContainer>
        <StatusBar />
        <Header justifyContent="center">
          <Search />
        </Header>
        <LaunchList />
      </S.HomeContainer>
    </TouchableWithoutFeedback>
  );
}
