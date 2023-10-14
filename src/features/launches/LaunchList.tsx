import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchLaunches } from "./launchesSlice";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import styled from "styled-components/native";
import LaunchCard from "../../components/LaunchCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export default function LaunchList() {
  const dispatch = useAppDispatch();
  const { filteredLaunches, error, isLoading, query } = useAppSelector(
    (state) => state.launches
  );

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  return (
    <>
      {filteredLaunches.length === 0 && query !== "" && !error ? (
        <Error>Nenhuma missão com esse nome foi encontrada!</Error>
      ) : (
        ""
      )}
      {isLoading && <Loading>Carregando nossas missões</Loading>}
      {error && <Error>Houve um erro ao carregar as missões!</Error>}
      <StyledLaunchList
        data={filteredLaunches}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <LaunchCard
            launchName={item.mission_name}
            launchNumber={item.flight_number}
            launchYear={item.launch_year}
            rocketType={item.rocket.rocket_name}
            successuful={item.launch_success}
            launchID={item.flight_number}
          />
        )}
      />
    </>
  );
}

const StyledLaunchList = styled.FlatList``;
