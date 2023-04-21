import { AnyAction } from 'redux';
import { RootState } from '../store';
import { ThunkAction } from '@reduxjs/toolkit';
import apiInstance from '../config/config';
import { IService } from '../Interfaces/ServiceInterface';
import { startLoadServices } from '../reducers/servicesReducer';

export const getServices = (): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { data } = await apiInstance.get('/services');
            const response: Array<IService> = data.data;
            dispatch(startLoadServices(response));
        } catch (error) {
            console.log(error)
        }
    }