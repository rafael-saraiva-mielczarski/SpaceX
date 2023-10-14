import { ILaunch } from "../features/launches/LaunchInterface";
import styled from "styled-components/native";
import LaunchInfo from "./LaunchInfo";

type SingleLaunchProps = {
  launch: ILaunch | undefined;
};

export default function SingleLaunchDetail({ launch }: SingleLaunchProps) {
  return (
    <StyledSingleLaunchDetail>
      <LaunchInfo data={launch?.flight_number}>Numero do voo: </LaunchInfo>
      <LaunchInfo data={launch?.launch_year}>Ano de lançamento: </LaunchInfo>
      <LaunchInfo data={launch?.rocket.rocket_name}>Foguete: </LaunchInfo>
      <LaunchInfo data={launch?.launch_success === true ? "Sim" : "Nao"}>
        Sucesso:{" "}
      </LaunchInfo>
    </StyledSingleLaunchDetail>
  );
}

const StyledSingleLaunchDetail = styled.SafeAreaView``;
