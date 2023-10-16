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
  const { launches, filteredLaunches, error, isLoading, query } =
    useAppSelector((state) => state.launches);
  const [offset, setOffset] = useState<number>(0);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const LIMIT = 20;

  useEffect(() => {
    dispatch(fetchLaunches(offset, LIMIT));
    if (launches.length > 90 && offset + 25 > launches.length) {
      setHasMoreData(false);
    }
  }, [offset]);

  function loadMore() {
    setOffset(offset + LIMIT);
  }

  return (
    <>
      {filteredLaunches.length === 0 && query !== "" && !error && (
        <Error>Nenhuma missão com esse nome foi encontrada!</Error>
      )}
      {isLoading && filteredLaunches.length === 0 && (
        <Loading>Carregando nossas missões</Loading>
      )}
      {error && <Error>Houve um erro ao carregar as missões!</Error>}
      <StyledLaunchList
        data={filteredLaunches}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        ListFooterComponent={hasMoreData && <Loader />}
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
