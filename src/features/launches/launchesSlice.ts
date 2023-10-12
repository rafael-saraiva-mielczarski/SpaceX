import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: false,
}

const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {}
})

export default launchesSlice.reducer