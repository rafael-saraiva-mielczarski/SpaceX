import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigation";
import { useAppSelector } from "../hooks/useAppSelector";
import { Launch } from "../features/launches/LaunchInterface";
import * as S from "../global/styles";
import SingleLaunchDetail from "../components/SingleLaunchDetail";
import Header from "../components/Header";
import { useAppNavigation } from "../hooks/useAppNavigation";

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
      <SingleLaunchDetail launch={launch} />
    </S.LaunchDetailsContainer>
  );
}
