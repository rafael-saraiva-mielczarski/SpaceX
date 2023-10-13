import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigation";
import { useAppSelector } from "../hooks/useAppSelector";
import { Launch } from "../features/launches/LaunchInterface";
import * as S from "../global/styles";
import SingleLaunchDetail from "../components/SingleLaunchDetail";
import Header from "../components/Header";
import { useAppNavigation } from "../hooks/useAppNavigation";
import LaunchInfo from "../components/LaunchInfo";
import LaunchPatch from "../components/LaunchPatch";
import { Text } from "react-native";
import HrLine from "../components/HrLine";

type RouteProps = RouteProp<RootStackParamList, "LaunchDetails">;

export default function LaunchDetails({ route }: any) {
  const navigation = useAppNavigation();
  const { launchID } = route.params;
  const launch: Launch | undefined = useAppSelector((state) =>
    state.launches.launches.find((launch) => launch.flight_number === launchID)
  );

  return (
    <S.LaunchDetailsContainer>
      <Header>
        <S.ReturnIcon
          name="arrowleft"
          onPress={() => navigation.navigate("Home")}
        />
        <S.LaunchName>{launch?.mission_name}</S.LaunchName>
      </Header>
      <S.LaunchDetailsMain>
        <S.LaunchDetailsStart>
          <SingleLaunchDetail launch={launch} />
          <LaunchPatch imgURL={launch?.links.mission_patch} />
        </S.LaunchDetailsStart>
        <S.LaunchMid>
          <LaunchInfo data={launch?.launch_site.site_name}>
            Local de lançamento:{" "}
          </LaunchInfo>
          <S.Description>Detalhes do lançamento:</S.Description>
          <S.LaunchDescription>{launch?.details}</S.LaunchDescription>
        </S.LaunchMid>
        <Text>Leia o artigo interio</Text>
        <HrLine />
      </S.LaunchDetailsMain>
    </S.LaunchDetailsContainer>
  );
}
