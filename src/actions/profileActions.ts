import axios from 'axios';

import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { ImagePickerResponse } from 'react-native-image-picker';

import { RootState } from '../store';
import apiInstance from '../config/config';

import { errorToastNotification } from '../helpers/notificaton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { startChangePassword } from '../reducers/profileReducer';
import { ICustomer } from '../Interfaces/LoginInterface';

export const updateImageProfile = (values:any): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const token = await AsyncStorage.getItem('token') || '';
            const response = await fetch('http://192.168.100.60:3000/api/auth/upload/profile-photo',{
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                    "token":  token
                },
                body: values
            });
            const { data }: { data: ICustomer } = await response.json() 
            dispatch(startChangePassword(data))
        } catch (error) {
            console.log(error)
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
