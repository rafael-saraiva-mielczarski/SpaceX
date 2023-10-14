import { RFValue } from "react-native-responsive-fontsize";
import { deviceWidth } from "../global/styles";
import styled from "styled-components/native";

type LaunchPatchProps = {
  imgURL: string | undefined;
};

export default function LaunchPatch({ imgURL }: LaunchPatchProps) {
  return <LaunchPatchImg source={{ uri: imgURL }} />;
}

const LaunchPatchImg = styled.Image`
  width: ${RFValue(50, deviceWidth)}px;
  height: ${RFValue(50, deviceWidth)}px;
`;
