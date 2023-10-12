import { configureStore } from "@reduxjs/toolkit";
import launchesReducer from './launches/launchesSlice'

const store = configureStore({
    reducer: {
        launches: launchesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
