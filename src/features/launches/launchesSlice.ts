import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Launch } from "./LaunchInterface";

interface LaunchInitialState {
    launches: Launch[]
    isLoading: boolean
    error: boolean
    launch: Launch | undefined
}

const initialState: LaunchInitialState = {
    launches: [],
    isLoading: false,
    error: false,
    launch: undefined
}

const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        fetchingLaunches(state) {
            state.isLoading = true
        },
        fetchLaunchesSuccess(state, action: PayloadAction<Launch[]>) {
            state.launches = action.payload
            state.isLoading = false
        },
        fetchingFailed(state, action: PayloadAction<boolean>) {
            state.isLoading = false
            state.error = action.payload
        },
        fetchSingleLaunch(state, action) { },
        getLaunchId(state, action: PayloadAction<number>) {
            state.launch = state.launches.find(state => state.flight_number === action.payload)
        }

    }
})

export const { fetchingLaunches, fetchLaunchesSuccess, fetchingFailed, fetchSingleLaunch, getLaunchId } = launchesSlice.actions;

export function fetchLaunches() {
    return async function (dispatch: any) {
        dispatch({ type: "launches/fetchingLaunches" })

        try {
            const response = await axios.get<Launch[]>('https://api.spacexdata.com/v3/launches');
            dispatch(fetchLaunchesSuccess(response.data))
        } catch (error: any) {
            dispatch(fetchingFailed(error.message))
        }
    }
}

export default launchesSlice.reducer