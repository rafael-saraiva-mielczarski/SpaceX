import { Keyboard, TouchableWithoutFeedback } from "react-native";
import * as S from "../global/styles";
import Header from "../components/Header";
import Search from "../components/Search";
import LaunchList from "../features/launches/LaunchList";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Home() {
  const isLoading = useAppSelector((state) => state.launches.isLoading);
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
