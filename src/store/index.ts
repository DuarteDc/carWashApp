import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import { uiSlice, authSlice } from '../reducers';


const rootReducer = combineReducers({
    ui  :   uiSlice.reducer,
    auth:   authSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
