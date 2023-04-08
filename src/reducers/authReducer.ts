import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthCustomer, ICustomer, ICustomerData } from '../Interfaces/LoginInterface';

interface CounterState {
    user            : ICustomer | {};  
    logged          : boolean;
    phoneVerified   : boolean;
}

const initialState: CounterState = {
    user         : {},
    logged       : false,
    phoneVerified: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startReavlidateToken: (state, action: PayloadAction<IAuthCustomer>) => {
            state.user          = action.payload.user;
            state.logged        = action.payload.logged;
            state.phoneVerified = action.payload.user?.phone?.verified || false
        },
        startLogin: (state, action: PayloadAction<IAuthCustomer>) => {
            state.user          = action.payload.user;
            state.logged        = action.payload.logged;
            state.phoneVerified = action.payload.user?.phone?.verified || false
        },
        startGoogleLogin: (state, action: PayloadAction<IAuthCustomer>) => {
            state.user          = action.payload.user;
            state.logged        = action.payload.logged;
            state.phoneVerified = action.payload.user?.phone?.verified || false
        },
        startRegister: (state, action: PayloadAction<IAuthCustomer>) => {
            state.user          = action.payload.user;
            state.logged        = action.payload.logged;
            state.phoneVerified = action.payload.user?.phone?.verified || false
        },
        startRegisterPhone:(state, action: PayloadAction<ICustomerData>) => {
            state.user = action.payload.user;
        }
    }
})

export const { startLogin, startReavlidateToken, startRegister, startGoogleLogin, startRegisterPhone } = authSlice.actions;

export default authSlice.reducer;