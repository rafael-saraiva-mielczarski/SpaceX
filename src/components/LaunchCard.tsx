import { useAppNavigation } from "../hooks/useAppNavigation";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import AppButton from "./AppButton";
import LaunchInfo from "./LaunchInfo";

type LaunchProps = {
  launchName: string;
  launchNumber: number;
  launchYear: string;
  rocketType: string;
  successuful: boolean;
  launchID: number;
};

export default function LaunchCard({
  launchName,
  launchNumber,
  launchYear,
  rocketType,
  successuful,
  launchID,
}: LaunchProps) {
  const navigation = useAppNavigation();
  return (
    <LaunchCardContainer>
      <LaunchName>{launchName}</LaunchName>
      <LaunchInfo data={launchNumber}>Numero do voo:</LaunchInfo>
      <LaunchInfo data={launchYear}>Ano de lançamento:</LaunchInfo>
      <LaunchInfo data={rocketType}>Fogueteo:</LaunchInfo>
      <LaunchInfo data={successuful === true ? "Sim" : "Nao"}>
        Sucesso:
      </LaunchInfo>
      <AppButton
        onPress={() =>
          navigation.navigate("LaunchDetails", { launchID: launchID })
        }
        color="black"
        borderColor="black"
      >
        Detalhes
      </AppButton>
    </LaunchCardContainer>
  );
}

const LaunchCardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.bgCard};
  width: 70%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  margin: 20px auto;
`;

const LaunchName = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => RFValue(theme.fontSize.ml, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 8px;
`;
