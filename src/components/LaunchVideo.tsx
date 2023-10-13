import styled from "styled-components/native";
import YoutubeIframe from "react-native-youtube-iframe";
import { useState } from "react";
import Loading from "./Loading";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";

type LaunchVideoProps = {
  videoID: string | undefined;
};

export default function LaunchVideo({ videoID }: LaunchVideoProps) {
  const [onReady, setOnReady] = useState<boolean>(false);
  return (
    <StyledLaunchVideo>
      <VideoText>Veja como foi</VideoText>
      <YoutubeIframe
        videoId={videoID}
        height={onReady ? 200 : 0}
        onReady={() => setOnReady(true)}
      />
      {!onReady && <Loading>Carregando Video</Loading>}
    </StyledLaunchVideo>
  );
}

const StyledLaunchVideo = styled.View``;

const VideoText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.ml, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin: 20px 0 10px;
`;
