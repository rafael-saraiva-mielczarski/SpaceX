import { useState } from "react";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import YoutubeIframe from "react-native-youtube-iframe";
import Loading from "./Loading";

type VideoProps = {
  videoID: string | undefined;
};

export default function VideoPlayer({ videoID }: VideoProps) {
  const [onReady, setOnReady] = useState<boolean>(false);
  return (
    <Video>
      <VideoText>Veja como foi</VideoText>
      <YoutubeIframe
        videoId={videoID}
        height={onReady ? 200 : 0}
        onReady={() => setOnReady(true)}
      />
      {!onReady && <Loading>Carregando Video</Loading>}
    </Video>
  );
}

const Video = styled.View`
  margin: 15px 10px;
`;

const VideoText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.ml, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-bottom: 15px;
`;
