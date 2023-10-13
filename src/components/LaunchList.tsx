import styled from "styled-components/native";
import LaunchCard from "../features/launches/LaunchCard";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    launchName: "DemonSat",
    launchNumber: 2,
    launchYear: 2007,
    RocketType: "Falcon 1",
  },
  {
    id: "2",
    launchName: "First Item",
    launchNumber: 2,
    launchYear: 2007,
    RocketType: "Falcon 1",
  },
  {
    id: "3",
    launchName: "First Item",
    launchNumber: 2,
    launchYear: 2007,
    RocketType: "Falcon 1",
  },
];

export default function LaunchList() {
  return (
    <StyledLaunchList
      data={DATA}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <LaunchCard
          launchName={item.launchName}
          launchNumber={item.launchNumber}
          launchYear={item.launchYear}
          rocketType={item.RocketType}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const StyledLaunchList = styled.FlatList``;
