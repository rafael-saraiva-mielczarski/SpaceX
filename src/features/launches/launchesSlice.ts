import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Launch } from "./LaunchInterface";

interface LaunchInitialState {
    launches: Launch[]
    isLoading: boolean
    error: boolean
}

const initialState: LaunchInitialState = {
    launches: [],
    isLoading: false,
    error: false,
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
    }
})

export const { fetchingLaunches, fetchLaunchesSuccess, fetchingFailed, fetchSingleLaunch } = launchesSlice.actions;

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