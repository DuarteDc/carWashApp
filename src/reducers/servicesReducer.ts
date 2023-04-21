import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IService } from '../Interfaces/ServiceInterface';

interface ServicesState {
    services    : Array<IService>;  
}

const initialState: ServicesState = {
    services    : [],
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        startLoadServices: (state, action: PayloadAction<IService[]>) => {
            state.services = action.payload;
        }
    }
})

export const { startLoadServices } = servicesSlice.actions;

export default servicesSlice.reducer;