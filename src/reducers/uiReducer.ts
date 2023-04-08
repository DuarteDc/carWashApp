import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    loading : boolean;
}

const initialState: CounterState = {
    loading : false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        }
    }
})

export const { startLoading, stopLoading} = uiSlice.actions;

export default uiSlice.reducer;