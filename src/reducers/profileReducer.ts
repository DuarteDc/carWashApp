import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthCustomer, ICustomer, ICustomerData } from '../Interfaces/LoginInterface';

interface CounterState {
    user    : ICustomer | {};  
}

const initialState: CounterState = {
    user    : {},
}

export const authSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        startChangePassword: (state, action: PayloadAction<ICustomer>) => {
            state.user          = action.payload;
        }
    }
})

export const { startChangePassword } = authSlice.actions;

export default authSlice.reducer;