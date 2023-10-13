import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchLaunches } from "./launchesSlice";
import styled from "styled-components/native";
import LaunchCard from "./LaunchCard";

export default function LaunchList() {
  const dispatch = useAppDispatch();
  const launches = useAppSelector((state) => state.launches.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  return (
    <StyledLaunchList
      data={launches}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <LaunchCard
          launchName={item.mission_name}
          launchNumber={item.flight_number}
          launchYear={item.launch_year}
          rocketType={item.rocket.rocket_name}
          successuful={item.launch_success}
        />
      )}
    />
  );
}

const StyledLaunchList = styled.FlatList``;
