import { useAppNavigation } from "../../hooks/useAppNavigation";
import { deviceWidth } from "../../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import AppButton from "../../components/AppButton";

type LaunchProps = {
  launchName: string;
  launchNumber: number;
  launchYear: string;
  rocketType: string;
  successuful: boolean;
};

export default function LaunchCard({
  launchName,
  launchNumber,
  launchYear,
  rocketType,
  successuful,
}: LaunchProps) {
  const navigation = useAppNavigation();
  return (
    <StyledLaunchCard>
      <StyledLaunchName>{launchName}</StyledLaunchName>
      <StyledLaunchInfo>
        <StyledLaunchText>Numero do Voo: </StyledLaunchText>
        <StyledLaunchData>{launchNumber}</StyledLaunchData>
      </StyledLaunchInfo>
      <StyledLaunchInfo>
        <StyledLaunchText>Ano de lançamento: </StyledLaunchText>
        <StyledLaunchData>{launchYear}</StyledLaunchData>
      </StyledLaunchInfo>
      <StyledLaunchInfo>
        <StyledLaunchText>Foguete: </StyledLaunchText>
        <StyledLaunchData>{rocketType}</StyledLaunchData>
      </StyledLaunchInfo>
      <StyledLaunchInfo>
        <StyledLaunchText>Sucesso: </StyledLaunchText>
        <StyledLaunchData>
          {successuful === true ? "Sim" : "Nao"}
        </StyledLaunchData>
      </StyledLaunchInfo>
      <AppButton
        onPress={() => navigation.navigate("Home")}
        color="black"
        borderColor="black"
      >
        Detalhes
      </AppButton>
    </StyledLaunchCard>
  );
}

const StyledLaunchCard = styled.View`
  background-color: ${({ theme }) => theme.colors.bgCard};
  width: 70%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  margin: 20px auto;
`;

const StyledLaunchName = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => RFValue(theme.fontSize.ml, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 8px;
`;

const StyledLaunchInfo = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const StyledLaunchText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const StyledLaunchData = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.sm, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
