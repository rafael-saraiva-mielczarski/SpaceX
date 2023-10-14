import type { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigation";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { StatusBar } from "react-native";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect } from "react";
import { getLaunchId } from "../features/launches/launchesSlice";
import * as S from "../global/styles";
import SingleLaunchDetail from "../components/SingleLaunchDetail";
import Header from "../components/Header";
import LaunchInfo from "../components/LaunchInfo";
import LaunchPatch from "../components/LaunchPatch";
import HrLine from "../components/HrLine";
import VideoPlayer from "../components/VideoPlayer";
import AppWebView from "../components/AppWebView";

type LaunchDetailsRouteProp = RouteProp<RootStackParamList, "LaunchDetails">;

interface ILaunchDetailsProps {
  route: LaunchDetailsRouteProp;
}

export default function LaunchDetails({ route }: ILaunchDetailsProps) {
  const { launchID } = route.params;
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const launch = useAppSelector((state) => state.launches.launch);

  useEffect(() => {
    dispatch(getLaunchId(launchID));
  }, []);

  return (
    <S.LaunchDetailsContainer>
      <StatusBar />
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
          <LaunchInfo data={launch?.details}>
            Detalhes do lançamento:{" "}
          </LaunchInfo>
        </S.LaunchMid>
        <HrLine />
        <VideoPlayer videoID={launch?.links.youtube_id} />
        <HrLine />
        <AppWebView link={launch?.links.article_link as string} />
      </S.LaunchDetailsMain>
    </S.LaunchDetailsContainer>
  );
}
