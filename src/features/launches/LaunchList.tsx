import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchLaunches } from "./launchesSlice";
import { useEffect, useState } from "react";
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
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchLaunches(offset));
  }, [offset]);

  function loadMore() {
    setOffset(offset + 10);
  }

  return (
    <>
      {filteredLaunches.length === 0 && query !== "" && !error ? (
        <Error>Nenhuma missão com esse nome foi encontrada!</Error>
      ) : (
        ""
      )}
      {isLoading && filteredLaunches.length === 0 && (
        <Loading>Carregando nossas missões</Loading>
      )}
      {error && <Error>Houve um erro ao carregar as missões!</Error>}
      <StyledLaunchList
        data={filteredLaunches}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.launch_date_utc.toString()}
        onEndReached={loadMore}
        ListFooterComponent={<Loader />}
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

const Loader = () => {
  const { filteredLaunches } = useAppSelector((state) => state.launches);
  if (filteredLaunches.length > 0)
    return <Loading>Carregando mais missões</Loading>;
};

const StyledLaunchList = styled.FlatList``;
