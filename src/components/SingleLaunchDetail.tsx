import styled from "styled-components/native";
import LaunchInfo from "./LaunchInfo";
import { Launch } from "../features/launches/LaunchInterface";

type SingleLaunchProps = {
  launch: Launch | undefined;
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
      <LaunchInfo data={launch?.launch_site.site_name}>
        Local do lançamento:{" "}
      </LaunchInfo>
    </StyledSingleLaunchDetail>
  );
}

const StyledSingleLaunchDetail = styled.SafeAreaView``;

const StyledNumber = styled.Text`
  font-size: 100px;
`;
