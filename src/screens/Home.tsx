import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useAppSelector } from "../hooks/useAppSelector";
import { StatusBar } from "react-native";
import * as S from "../global/styles";
import Header from "../components/Header";
import Search from "../components/Search";
import LaunchList from "../features/launches/LaunchList";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Home() {
  const isLoading = useAppSelector((state) => state.launches.isLoading);
  const error = useAppSelector((state) => state.launches.error);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.HomeContainer>
        <StatusBar />
        <Header justifyContent="center">
          <Search />
        </Header>
        {isLoading && <Loading>Carregando nossas missões</Loading>}
        {error && <Error>Houve um erro ao carregar as missões!</Error>}
        <LaunchList />
      </S.HomeContainer>
    </TouchableWithoutFeedback>
  );
}
