import { StatusBar, View } from "react-native";
import * as S from "../global/styles";
import AppButton from "../components/AppButton";
import { useAppNavigation } from "../hooks/useAppNavigation";

export default function Start() {
  const navigation = useAppNavigation();
  return (
    <S.StartContainer>
      <StatusBar />
      <View>
        <S.Logo source={require("../../assets/spacex.png")} />
        <S.Title>Acompanhe nossos foguetes</S.Title>
      </View>
      <S.Astronaut source={require("../../assets/astronaut.png")} />
      <AppButton onPress={() => navigation.navigate("Home")} bgColor="black">
        Explorar
      </AppButton>
    </S.StartContainer>
  );
}
