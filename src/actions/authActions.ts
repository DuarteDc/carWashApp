import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../store';

import axios from 'axios';
import apiInstance from '../config/config';

import { errorToastNotification } from '../helpers/notificaton';

import { IAuthCustomer } from '../Interfaces/LoginInterface';
import { startLogin, startReavlidateToken, startRegister, startRegisterPhone } from '../reducers/authReducer';
import { IRegisterValues, ILoginValues, ILoginGoogleValues, IPhoneNumber, IVerifyCode } from '../hooks/useAuth';

export const login = (values: ILoginValues): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { data } = await apiInstance.post('/auth/login', values);
            const response: IAuthCustomer = data.data;
            await AsyncStorage.setItem('token', response.token);
            dispatch(startLogin({ user: response.user, logged: true, token: '' }));
            return {
                success: true,
                user: response.user,
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                errorToastNotification(error.response?.data.message)
                return {
                    success: false
                }
            }
            errorToastNotification('Parece que hubo un error, intenta más tarde')
            return {
                success: false
            }
        }
    }

export const register = (values: IRegisterValues): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { data } = await apiInstance.post('/auth/register', values);
            const response: IAuthCustomer = data.data;
            await AsyncStorage.setItem('token', response.token);
            dispatch(startRegister({ user: response.user, logged: true, token: '' }));
        } catch (error) {
            if (axios.isAxiosError(error)) return errorToastNotification(error.response?.data.message)
            errorToastNotification('Parece que hubo un error, intenta más tarde')
        }
    }

export const revalidateToken = (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { data } = await apiInstance.get('/auth/customer');
            const response: IAuthCustomer = data.data;
            await AsyncStorage.setItem('token', response.token);
            dispatch(startReavlidateToken({ user: response.user, logged: true, token: '' }));
        } catch (error) {
            if (axios.isAxiosError(error)) return errorToastNotification(error.response?.data.message)
            errorToastNotification('Parece que hubo un error, intenta más tarde')
        }
    }

export const loginWithGoogle = (values: ILoginGoogleValues): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { data } = await apiInstance.post('/auth/google', values);
            const response: IAuthCustomer = data.data;
            await AsyncStorage.setItem('token', response.token);
            dispatch(startLogin({ user: response.user, logged: true, token: '' }));
        } catch (error) {
            if (axios.isAxiosError(error)) return errorToastNotification(error.response?.data.message)
            errorToastNotification('Parece que hubo un error, intenta más tarde')
        }
    }


export const verifyAccount = (values: IPhoneNumber): ThunkAction<object, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        try {
            const { data } = await apiInstance.post('/auth/phone-number', values);
            const response: IAuthCustomer = data.data;
            dispatch(startRegisterPhone({ user: response.user }));
            console.log(response)
            return {
                success: true
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                errorToastNotification(error.response?.data.message)
                return {
                    success: false,
                }
            }
            errorToastNotification('Parece que hubo un error, intenta más tarde')
            return {
                success: false,
            }
        }
    }

export const sendCodeVerification = (values: IVerifyCode): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            console.log(values)
            const { data } = await apiInstance.post('/auth/verify-code', values);
            const response: IAuthCustomer = data.data;
            return {
                success : true,
                user    : response.user
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                errorToastNotification(error.response?.data.message)
                return {
                    success: false,
                }
            }
            errorToastNotification('Parece que hubo un error, intenta más tarde')
            return {
                success: false,
            }
        }
    }
