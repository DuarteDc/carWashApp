import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import { uiSlice, authSlice } from '../reducers';

const rootReducer = combineReducers({
    ui  :   uiSlice.reducer,
    auth:   authSlice.reducer,
});

const composedEnhancer = applyMiddleware(thunk);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk:{
            extraArgument: composedEnhancer
        }
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
