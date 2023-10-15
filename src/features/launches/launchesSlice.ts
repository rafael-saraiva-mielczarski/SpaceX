import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ILaunch } from "./LaunchInterface";
import axios from "axios";

interface LaunchInitialState {
    launches: ILaunch[]
    filteredLaunches: ILaunch[]
    launch: ILaunch | undefined
    query: string
    isLoading: boolean
    error: boolean
    page: number
}

const initialState: LaunchInitialState = {
    launches: [],
    filteredLaunches: [],
    launch: undefined,
    query: "",
    isLoading: false,
    error: false,
    page: 1
}

const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        fetchingLaunches(state) {
            state.isLoading = true
        },
        fetchLaunchesSuccess(state, action: PayloadAction<ILaunch[]>) {
            state.launches = [...state.launches, ...action.payload]
            state.isLoading = false
            state.page += 1
        },
        fetchingFailed(state, action: PayloadAction<boolean>) {
            state.isLoading = false
            state.error = action.payload
        },
        getLaunchId(state, action: PayloadAction<number>) {
            state.launch = state.launches.find(state => state.flight_number === action.payload)
        },
        filterLaunch(state, action: PayloadAction<string>) {
            state.filteredLaunches = state.launches.filter((launch) =>
                launch.mission_name.toLowerCase().includes(action.payload.toLowerCase()))
            state.query = action.payload
        }
    }
})

export const { fetchingLaunches, fetchLaunchesSuccess, fetchingFailed, getLaunchId, filterLaunch } = launchesSlice.actions;

export function fetchLaunches(offset: number) {
    return async function (dispatch: Dispatch) {
        dispatch(fetchingLaunches())

        try {
            const response = await axios.get<ILaunch[]>(`https://api.spacexdata.com/v3/launches?offset=${offset}&limit=${15}`);

            dispatch(fetchLaunchesSuccess(response.data))
        } catch (error: any) {
            dispatch(fetchingFailed(error.message))
        }
    }
}

export default launchesSlice.reducer